import React, { useState, useEffect } from "react";

import { db } from "../../Firebase/firebase";
import PreSingleTampe from "../SingleTamp/PreSingleTampe";

const Recent = () => {
  const [layout, setLayout] = useState([]);

  //last docs
  const [lastDoc, setLastDoc] = useState();

  //load more
  const [moreTemps, setMoreTampes] = useState(false);

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    db.collection("levbitzLayouts")
      //   .where("category", "==", "recent")
      .orderBy("index", "desc")
      .limit(6)
      //  .where("Category", "==", "recent", ("subCategory", "==", "recent"))
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        //  setLoading(false);

        const result = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        const NoMoreTampe = snapshot.size === 0;
        if (!NoMoreTampe) {
          const lastDoc = snapshot.docs[snapshot.docs.length - 1];
          console.log(lastDoc.data());
          setLayout(result);
          //setLoading(false);
          setLastDoc(lastDoc);
        } else {
          setIsEmpty(true);
          setMoreTampes(moreTemps);
        }
      });
    // eslint-disable-next-line
  }, []);

  //fetch More

  const fetchMore = () => {
    setMoreTampes(true);
    db.collection("levbitzLayouts")
      //   .where("category", "==", "recent")
      .orderBy("index", "desc")
      .startAfter(lastDoc)
      .limit(6)
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        //  setLoading(false);

        const result = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        const NoMoreTampe = snapshot.size === 0;

        if (!NoMoreTampe) {
          const lastDoc = snapshot.docs[snapshot.docs.length - 1];
          setLayout((layout) => [...layout, ...result]);
          //setLoading(false);
          setLastDoc(lastDoc);
          setMoreTampes(false);
        } else {
          setIsEmpty(true);
          setMoreTampes(moreTemps);
        }
      });
    //se
  };

  if (layout.length === 0) {
    return (
      <div>
        <h2>loading</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Team</h1>
        {layout.map((item) => {
          const {
            id,
            data: { imageUrl, demoUrl, title, subtitle, Simpledesc, frameWork },
          } = item;
          return (
            <PreSingleTampe
              myLink={`/details/${item.id}`}
              source={imageUrl}
              heading={item.title}
            />
          );
        })}
        {moreTemps && <h1>Loading more tamplates</h1>}{" "}
        {!moreTemps && !isEmpty && (
          <p className="center">
            <button onClick={fetchMore} className="btn">
              More
            </button>
          </p>
        )}
        {isEmpty && <h1>There are more tamplates</h1>}
      </div>
    );
  }
};
export default Recent;
