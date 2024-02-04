import "./BuildFence.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ShoppingList from "../../pages/ShoppingList/ShoppingList";

function BuildFence() {
  console.log("buildfence mounted");
  const locations = useLocation();
  const formData = locations.state?.formData;
  const [fenceData, setFenceData] = useState([]);
  const [measurements, setMeasurements] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (!formData) return;

    let isMounted = true; // Add a variable to track component mount status

    const fetchData = async () => {
      try {
        if (fenceData.length > 0) return;

        let length = formData.length;
        let height = formData.height;
        let distanceApart = 8;
        let fenceBoards = length * 2;
        let sections = length / 8;
        let posts = sections + 1;
        let rails = "";
        let gravel = Math.ceil(posts / 3);
        let concrete = posts;
        let postHeight = "";
        let fenceBoardHeight = "";

        let railCount = (height) => {
          if (height <= 3) {
            rails = 1;
            fenceBoardHeight = 5;
            postHeight = 8;
          } else if (height > 5 && height < 6) {
            rails = 2;
            fenceBoardHeight = 6;
            postHeight = 10;
          } else {
            rails = 3;
            fenceBoardHeight = 8;
            postHeight = 12;
          }
          return rails;
        };

        let railsActual = railCount(height) * sections;

        let fenceBoardScrews = railsActual * 4 + fenceBoards * (rails * 2);

        if (sections % 8 !== 0) {
          sections = Math.ceil(sections);
          distanceApart = Math.floor((length / sections) * 100) / 100;
          posts = sections + 1;
          gravel = Math.ceil(posts / 2);
          concrete = posts;
          railsActual = railCount(height) * sections;
        }

        let railsBraces = railsActual * 2;
        let railBraceScrews = railsBraces * 3 + sections * 3;
        let twoByFours = railsActual + sections;
        let twoByFourLength = Math.ceil(distanceApart);

        const railBraceScrewsLink = "https://www.homedepot.ca/product/paulin--8-x-3-inch-square-drive-flat-head-deck-screw-unc-in-brown-1000pcs/1000152763";
        const fenceBoardScrewsLink = "https://www.homedepot.ca/product/paulin--8-x-2-1-2-inch-square-drive-flat-head-deck-screw-unc-in-brown-1-200pcs/1000109794";
        const twoByFourLink = "https://www.homedepot.ca/product/micropro-sienna-2-x-4-x-8-pressure-treated-wood-above-ground-use-only-/1000789777";
        const strongTieLink = "https://www.homedepot.ca/product/simpson-strong-tie-fb-zmax-galvanized-fence-rail-bracket-for-2x4/1000152513";
        const concreteLink = "https://www.homedepot.ca/product/sakrete-concrete-mix-30-kg-multipurpose-high-strength-premixed-cement-for-new-projects-and-repairs/1000109060";
        const gravelLink = "https://www.homedepot.ca/product/sakrete-3-4-gravel-30-kg-for-general-use-landscaping-soil-conditioning-and-displays/1000149829";

        const postLink = (postHeight) => {
          if (postHeight === 5) {
            return "https://www.homedepot.ca/product/micropro-sienna-4-x-4-x-8-pressure-treated-wood-post-suitable-for-ground-contact-/1000790178";
          } else if (postHeight === 10) {
            return "https://www.homedepot.ca/product/micropro-sienna-4-x-4-x-10-pressure-treated-wood-post-suitable-for-ground-contact-/1000790080";
          } else {
            return "https://www.homedepot.ca/product/micropro-sienna-4-x-4-x-12-pressure-treated-wood-post-suitable-for-ground-contact-/1000790394";
          }
        };

        const fenceBoardLink = (fenceBoardHeight) => {
          if (fenceBoardHeight === 5) {
            return "https://www.homedepot.ca/product/micropro-sienna-1-x-6-x-5-pressure-treated-wood-fence-board/1000790633";
          } else if (fenceBoardHeight === 6) {
            return "https://www.homedepot.ca/product/micropro-sienna-1-x-6-x-6-pressure-treated-wood-fence-board/1000790632";
          } else {
            return "https://www.homedepot.ca/product/micropro-sienna-1-x-6-x-8-pressure-treated-wood-fence-board/1000790631";
          }
        };

        const calculateScrewBoxes = (quantity) => {
          if (quantity < 1000) {
            return 1;
          } else {
            return Math.ceil(quantity / 1000);
          }
        };

        const fetchedData = [
          {
            id: "1",
            link: postLink(postHeight),
            item_name: "Pressure Treated Wooden Post",
            dimensions: `4x4x${postHeight}`,
            quantity: posts,
            price: "",
          },
          {
            id: "2",
            link: twoByFourLink,
            item_name: "Pressure Treated rail and cap boards",
            dimensions: `2x4x8`,
            quantity: twoByFours,
            price: "",
          },
          {
            id: "3",
            link: fenceBoardLink(fenceBoardHeight),
            item_name: "Pressure Treated Fence Boards",
            dimensions: `1x6x${fenceBoardHeight}`,
            quantity: fenceBoards,
            price: "",
          },
          {
            id: "4",
            link: concreteLink,
            item_name: "Concrete",
            dimensions: `30kg`,
            quantity: concrete,
            price: "",
          },
          {
            id: "5",
            link: gravelLink,
            item_name: "Gravel",
            dimensions: `30kg`,
            quantity: gravel,
            price: "",
          },
          {
            id: "6",
            link: strongTieLink,
            item_name: "Simpson Strong Ties",
            dimensions: `2x4`,
            quantity: railsBraces,
            price: "",
          },
          {
            id: "7",
            link: fenceBoardScrewsLink,
            item_name: "Screws - fence boards",
            dimensions: `2-1/2 inch`,
            quantity: calculateScrewBoxes(fenceBoardScrews),
            price: "",
          },
          {
            id: "8",
            link: railBraceScrewsLink,
            item_name: "Screws - rails & cap",
            dimensions: `3-inch`,
            quantity: calculateScrewBoxes(railBraceScrews),
            price: "",
          },
        ];

        const updatedFenceData = [];

        for (const item of fetchedData) {
          const response = await axios.post(
            "http://localhost:8080/scrapeyscrape",
            {
              link: item.link,
            }
          );
          const updatedItem = { ...item, price: response.data.price };
          updatedFenceData.push(updatedItem);
        }

        // Check if the component is still mounted before updating state
        if (isMounted) {
          setFenceData(updatedFenceData);
          setMeasurements({ length, height, distanceApart, sections });
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching prices:", error);
        if (error.response) {
          console.error("Server responded with status:", error.response.status);
          console.error("Response data:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up request:", error.message);
        }
      }
    };

    fetchData();

    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, [formData]);

  return (
    <div className="build-fence">
      {!loading && <ShoppingList measurements={measurements} data={fenceData} />}
    </div>
  );
}

export default BuildFence;

