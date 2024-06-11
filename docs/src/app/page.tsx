

import Link from "next/link";
import styles from "./page.module.css";
import Docs from '@/components/docs'
import { TreeFolderComp } from '@/components/tree-folder'
import { SideLinkObserver } from "@/components/side-link-observer";
import Attribution from "@/components/attribution";

export default function Home() {
  return (<>
    <SideLinkObserver />
    <header className={styles.header}>
      <h1><Link href="/">React Tree Folder</Link></h1>
    </header>
    <main className={styles.main}>
      <div className={styles.first}>
        <TreeFolderComp />
        <a href="#installation" className={styles.docsLink}>Read The Docs</a>
      </div>
      <div id="docs" className={styles.docs}>
        <Docs />
      </div>
    </main>
    <footer className={styles.footer}>
      Cheers, <Link 
        href="https://jujiyangasli.com"
        target="_blank"
        rel="noreferrer noopener"
      >jujiyangasli.com</Link>
      <Attribution />
    </footer>
  </>);
}
