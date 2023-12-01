import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import styles from "../Homepage/Homepage.module.css";

export default function Homepage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums } = data;
  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
      </div>
    </>
  );
}
