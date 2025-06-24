import React, { useEffect } from "react";
import { sections, sectionMap, portfolioItems } from "../../pages/Work/data";
import { SECTION_TITLES } from "../../pages/Work/constants";
import { PortfolioItem } from "../../pages/Work/types";

interface PortfolioSectionProps {
  activeTab: string;
  searchQuery?: string;
  setSearchQuery: (query: string) => void;
}

// Type guard for section titles
interface SectionWithMain {
  main: string;
  description?: string;
}

function isSectionWithMain(value: unknown): value is SectionWithMain {
  return typeof value === "object" && value !== null && "main" in value;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  activeTab,
  searchQuery = "",
  setSearchQuery,
}): JSX.Element => {
  useEffect(() => {
    if (searchQuery) {
      // When searching, show all sections
      Object.values(sectionMap)
        .flat()
        .forEach((sectionId) => {
          const el = document.querySelector(`.${sectionId}`);
          if (el) {
            el.classList.remove("hidden");
          }
        });
    } else {
      // Normal tab filtering behavior
      Object.values(sectionMap)
        .flat()
        .forEach((sectionId) => {
          const el = document.querySelector(`.${sectionId}`);
          if (el) {
            el.classList.add("hidden");
          }
        });

      const sectionsToShow = sectionMap[activeTab] || [];
      sectionsToShow.forEach((sectionId) => {
        const el = document.querySelector(`.${sectionId}`);
        if (el) {
          el.classList.remove("hidden");
        }
      });

      // Update URL hash
      window.history.replaceState({}, "", `#${activeTab}`);
    }
  }, [activeTab, searchQuery]);

  // Helper function to chunk array into pairs
  const chunkArray = <
    T extends {
      title: string;
      description: string;
      imageUrl: string;
      link: string;
    }
  >(
    arr: T[],
    size: number
  ) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  // Filter items based on search query
  const filterItems = (items: PortfolioItem[]) => {
    if (!searchQuery) return items;

    const query = searchQuery.toLowerCase().trim();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  };

  // Group portfolio items into pairs for the grid
  const filteredPortfolioItems = filterItems(portfolioItems);
  const portfolioItemPairs = chunkArray(filteredPortfolioItems, 2);

  // If there's a search query and no results, show a message
  if (searchQuery && filteredPortfolioItems.length === 0) {
    const suggestedCategories = portfolioItems.map((item) => {
      return {
        key: item.id,
        value: item.id,
      };
    });

    return (
      <div className="no-results-message">
        <h3>No projects found matching "{searchQuery}"</h3>
        <p>
          We couldn't find any projects that match your search. Try adjusting
          your search terms or explore some popular categories below.
        </p>
        <div className="suggestions">
          <h4>Popular Search Keywords</h4>
          <ul>
            {suggestedCategories.slice(0, 6).map(({ key, value }) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-sections">
      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="row row-text">
          <div className="col title text-[32px] font-[600] text-[#333333]">
            <h2>{searchQuery ? `` : SECTION_TITLES.PORTFOLIO.main}</h2>
          </div>
          <div className="col content text-[16px] text-[#333333]">
            <p>{searchQuery ? `` : SECTION_TITLES.PORTFOLIO.description}</p>
          </div>
        </div>

        {portfolioItemPairs.map((pair, rowIndex) => (
          <div key={rowIndex} className="row">
            {pair.map((item) => (
              <div key={item.id} className="col">
                <div className="img-container">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {}}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        // Remove navigation
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={item.imageUrl} alt={item.title} />
                    <div className="overlay">
                      <h3 className="text-[24px] font-[600]">{item.title}</h3>
                      <p className="text-[16px]">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {pair.length === 1 && <div className="col"></div>}
          </div>
        ))}
      </section>

      {/* Only show other sections if not searching */}
      {!searchQuery && (
        <>
          {/* Gallery Block */}
          <section className="gallery-block">
            <div className="row row-text">
              <div className="col title text-[32px] font-[600] text-[#333333]">
                <h2>{sections.gallery.heading}</h2>
              </div>
              <div className="col content text-[16px] text-[#333333]">
                <p>{sections.gallery.description}</p>
              </div>
            </div>

            {chunkArray(sections.gallery.items, 2).map((pair, rowIndex) => (
              <div key={rowIndex} className="row">
                {pair.map((item, itemIndex) => (
                  <div key={itemIndex} className="col">
                    <div className="img-container">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {}}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Remove navigation
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="overlay">
                          <h3 className="text-[24px] font-[600]">
                            {item.title}
                          </h3>
                          <p className="text-[16px]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {pair.length === 1 && <div className="col"></div>}
              </div>
            ))}
          </section>

          {/* Creative Block */}
          <section className="creative-block">
            <div className="row row-text">
              <div className="col title text-[32px] font-[600] text-[#333333]">
                <h2>{sections.creative.heading}</h2>
              </div>
              <div className="col content text-[16px] text-[#333333]">
                <p>{sections.creative.description}</p>
              </div>
            </div>
            {chunkArray(sections.creative.items, 2).map((pair, rowIndex) => (
              <div key={rowIndex} className="row">
                {pair.map((item, itemIndex) => (
                  <div key={itemIndex} className="col">
                    <div className="img-container">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {}}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Remove navigation
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="overlay">
                          <h3 className="text-[24px] font-[600]">
                            {item.title}
                          </h3>
                          <p className="text-[16px]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {pair.length === 1 && <div className="col"></div>}
              </div>
            ))}
          </section>

          {/* Inspire Block */}
          <section className="inspire-block">
            <div className="row row-text">
              <div className="col title text-[32px] font-[600] text-[#333333]">
                <h2>{sections.inspire.heading}</h2>
              </div>
              <div className="col content text-[16px] text-[#333333]">
                <p>{sections.inspire.description}</p>
              </div>
            </div>
            {chunkArray(sections.inspire.items, 2).map((pair, rowIndex) => (
              <div key={rowIndex} className="row">
                {pair.map((item, itemIndex) => (
                  <div key={itemIndex} className="col">
                    <div className="img-container">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {}}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Remove navigation
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="overlay">
                          <h3 className="text-[24px] font-[600]">
                            {item.title}
                          </h3>
                          <p className="text-[16px]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {pair.length === 1 && <div className="col"></div>}
              </div>
            ))}
          </section>

          {/* Vision Block */}
          <section className="vision-block">
            <div className="row row-text">
              <div className="col title text-[32px] font-[600] text-[#333333]">
                <h2>{sections.vision.heading}</h2>
              </div>
              <div className="col content text-[16px] text-[#333333]">
                <p>{sections.vision.description}</p>
              </div>
            </div>
            {chunkArray(sections.vision.items, 2).map((pair, rowIndex) => (
              <div key={rowIndex} className="row">
                {pair.map((item, itemIndex) => (
                  <div key={itemIndex} className="col">
                    <div className="img-container">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {}}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Remove navigation
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="overlay">
                          <h3 className="text-[24px] font-[600]">
                            {item.title}
                          </h3>
                          <p className="text-[16px]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {pair.length === 1 && <div className="col"></div>}
              </div>
            ))}
          </section>

          {/* Identity Block */}
          <section className="identity-block">
            <div className="row row-text">
              <div className="col title text-[32px] font-[600] text-[#333333]">
                <h2>{sections.identity.heading}</h2>
              </div>
              <div className="col content text-[16px] text-[#333333]">
                <p>{sections.identity.description}</p>
              </div>
            </div>
            {chunkArray(sections.identity.items, 2).map((pair, rowIndex) => (
              <div key={rowIndex} className="row">
                {pair.map((item, itemIndex) => (
                  <div key={itemIndex} className="col">
                    <div className="img-container">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {}}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Remove navigation
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="overlay">
                          <h3 className="text-[24px] font-[600]">
                            {item.title}
                          </h3>
                          <p className="text-[16px]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {pair.length === 1 && <div className="col"></div>}
              </div>
            ))}
          </section>

          {/* Essence Block */}
          <section className="essence-block">
            <div className="row row-text">
              <div className="col title text-[32px] font-[600] text-[#333333]">
                <h2>{sections.essence.heading}</h2>
              </div>
              <div className="col content text-[16px] text-[#333333]">
                <p>{sections.essence.description}</p>
              </div>
            </div>
            {chunkArray(sections.essence.items, 2).map((pair, rowIndex) => (
              <div key={rowIndex} className="row">
                {pair.map((item, itemIndex) => (
                  <div key={itemIndex} className="col">
                    <div className="img-container">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {}}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Remove navigation
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="overlay">
                          <h3 className="text-[24px] font-[600]">
                            {item.title}
                          </h3>
                          <p className="text-[16px]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {pair.length === 1 && <div className="col"></div>}
              </div>
            ))}
          </section>

          {/* Product Block */}
          <section className="product-block">
            <div className="row row-text">
              <div className="col title text-[32px] font-[600] text-[#333333]">
                <h2>{sections.product.heading}</h2>
              </div>
              <div className="col content text-[16px] text-[#333333]">
                <p>{sections.product.description}</p>
              </div>
            </div>
            {chunkArray(sections.product.items, 2).map((pair, rowIndex) => (
              <div key={rowIndex} className="row">
                {pair.map((item, itemIndex) => (
                  <div key={itemIndex} className="col">
                    <div className="img-container">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {}}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Remove navigation
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="overlay">
                          <h3 className="text-[24px] font-[600]">
                            {item.title}
                          </h3>
                          <p className="text-[16px]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {pair.length === 1 && <div className="col"></div>}
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default PortfolioSection;
