import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>No installation is needed, everything runs in a modern browser.</>
    ),
  },
  {
    title: "FAIR data is not an afterthought",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        By converting all data in to FAIR formats upon importation we make data
        resuse possible.
      </>
    ),
  },
  {
    title: "Build by chemists for chemists",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>The developer have bench experience and know what chemists need.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
