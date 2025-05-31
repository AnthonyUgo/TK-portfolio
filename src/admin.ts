// src/admin.ts
import './styles/admin.css.ts';

import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCYDNFAZgV1p1n349N1TnLDAkPVesvTkpE",
  authDomain: "tk-curated.firebaseapp.com",
  projectId: "tk-curated",
  storageBucket: "tk-curated.appspot.com",
  messagingSenderId: "474567523573",
  appId: "1:474567523573:web:5c7e6f51ff86f5158619bc",
  measurementId: "G-RSTZZET7G6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(app);

const logoutBtn = document.getElementById('logoutBtn') as HTMLButtonElement;
const uploadBtn = document.getElementById('uploadBtn') as HTMLButtonElement;
const mediaUpload = document.getElementById('mediaUpload') as HTMLInputElement;
const projectGrid = document.getElementById('projectGrid') as HTMLDivElement;

// Listen for auth state
onAuthStateChanged(auth, user => {
  if (!user) window.location.href = "/admin-login.html";
});

// Handle logout
logoutBtn?.addEventListener('click', async () => {
  await signOut(auth);
  window.location.href = "/";
});

// Handle file upload
uploadBtn?.addEventListener('click', async () => {
  const file = mediaUpload.files?.[0];
  if (!file) return alert("No file selected.");

  const selectedProject = (document.getElementById('projectSelect') as HTMLSelectElement).value;
  const storagePath = `media/${selectedProject}/${file.name}`;
  const storageRef = ref(storage, storagePath);

  try {
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log("Uploaded file to:", storagePath);
    console.log("Download URL:", downloadURL);

    const mediaRef = doc(db, 'projects', selectedProject);
    await updateDoc(mediaRef, {
      images: arrayUnion(downloadURL)
    });

    alert("Upload successful!");
    location.reload(); // Show updated project
  } catch (err) {
    console.error("Upload error:", err);
    alert("Upload failed. Check console for details.");
  }
});

// Default project cards
const defaultProjects = [
  { id: 'project1', name: 'Look One' },
  { id: 'project2', name: 'Look Two' },
  { id: 'project3', name: 'Look Three' },
  { id: 'project4', name: 'Look Four' },
  { id: 'project5', name: 'Look Five' },
];

// Load project cards into the grid
async function loadProjects() {
  for (const project of defaultProjects) {
    const docRef = doc(db, 'projects', project.id);
    const docSnap = await getDoc(docRef);
    const name = docSnap.exists() ? docSnap.data().name : project.name;
    const images = docSnap.exists() ? docSnap.data().images || [] : [];
    const videos = docSnap.exists() ? docSnap.data().videos || [] : [];

    const card = document.createElement('div');
    card.className = 'project-card';

    let mediaHtml = '';
  images.forEach((imgUrl: string) => {
  mediaHtml += `<img src="${imgUrl}" alt="Project Image" style="max-width: 100%; border-radius: 8px; margin-bottom: 0.5rem;" />`;
});
    videos.forEach((vid: string) => {
      mediaHtml += `<video controls src="${vid}" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;"></video>`;
    });

    card.innerHTML = `
      <h3>${name}</h3>
      ${mediaHtml}
      <input type="text" value="${name}" id="input-${project.id}" />
      <button data-id="${project.id}">Save Name</button>
    `;

    projectGrid?.appendChild(card);
  }

  // Save project name
  document.querySelectorAll('.project-card button')?.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const id = (e.target as HTMLElement).getAttribute('data-id');
      if (id) {
        const input = document.getElementById(`input-${id}`) as HTMLInputElement;
        const name = input.value;

        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);
        const images = docSnap.exists() ? docSnap.data().images || [] : [];
        const videos = docSnap.exists() ? docSnap.data().videos || [] : [];

        await setDoc(docRef, { name, images, videos });
        alert('Project name updated!');
      }
    });
  });
}

loadProjects();
