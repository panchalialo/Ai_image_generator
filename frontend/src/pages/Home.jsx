import React, { useState, useEffect } from "react";
import { Card, FormField, Loader } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");

  const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      return data.map((post) => <Card key={post._id} {...post} />);
    }
    return (
      <h2 className="mt-5 font-bold text-xl uppercase text-slate-400 ">
        {title}
      </h2>
    );
  };

  return (
    <>
      <section className="max-w-7xl mx-auto">
        {/* -------------------------------Main heading.----------------------------------------- */}
        <div>
          <h1 className="front-extrabold text-slate-200 text-[32px] ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400">
              Community{" "}
            </span>
            Showcase
          </h1>
          <p className="mt-2 text-slate-400 text-[16px] max-w-[700px]">
            {" "}
            Browse through a collection of imaginative and visually stunning
            images generated by DALL-E AI{" "}
          </p>
        </div>

        {/* ----------------------------search section----------------------------------- */}

        <div className="mt-16">
          <FormField />
        </div>

        {/* ----------------------------Body----------------------------------- */}

        <div className="mt-10">
          {loading ? (
            <>
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            </>
          ) : (
            <>
              {searchText && (
                <h2 className="font-medium text-slate-200 text-xl mb-3">
                  Showing results for
                  <span className="text-purple-200">{searchText}</span>
                </h2>
              )}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                {searchText ? (
                  <RenderCards data={[]} title="No search result found" />
                ) : (
                  <RenderCards data={[]} title="No posts found" />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;