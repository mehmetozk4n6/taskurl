"use client"

import { useRef, useState } from 'react';
import styles from "./page.module.css";
import slugify from 'slugify';


export default function Home() {
  const [branchName,setBranchName] = useState('')

  return (
    <main className={styles.main}>

      <input
        type="text"
        value={branchName}
        onChange={(e) => setBranchName(e.target.value)}
        placeholder="Enter URL"
        className={styles.input}
      />
      <div style={{ textAlign: "center" ,width: "100%",height: "100%"}}>
        {
          slugify(`${branchName.replace(":"," ")}`, '-').replace('Bug-', 'Bug/').replace('Feature-', 'Feature/')
         }
      </div>

      
    </main>
  );
}
