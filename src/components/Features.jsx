import React from "react";
import { dotColors, featuresData } from "../assets/constants";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                Your Complete Development
              </span>
              <br />
              <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                WorkFlow
              </span>
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-32">
            {featuresData.map((item, key) => (
              <div key={key}>
                {/* ---codes */}
                <div>
                  <div>
                    {/* ---IDE Interface */}
                    <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:font-sm">
                      <div className="flex items-center gap-x-1 sm:gap-x-2 mb-3 sm:mb-4">
                        <div className="dots flex items-center gap-x-1 sm:gap-x-2">
                          {dotColors.map((item, key) => (
                            <div
                              key={key}
                              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${item.colorCode}`}
                            ></div>
                          ))}
                        </div>

                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                          {item.title}
                        </span>
                      </div>

                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            borderRadius: "8px",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            height: "100%",
                            border: "1px solid #3c3c3c",
                          }}
                          wrapLines={true}
                        >
                          {item.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
