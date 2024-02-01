import "./BuildFence.scss";

function BuildFence({ dimensions }) {

  let distanceApart = 8;
  let sections = length / 8;
  
  if (sections % 8 != 0) {
    sections = Math.ceil(sections);
    distanceApart = Math.floor((length / sections) * 100) / 100;
  }
  return [sections, distanceApart];

  const builder = (fenceLength) => {
    let sections = fenceLength / 8;
    return sections;
  };

  return <></>;
}

export default BuildFence;

//function to build the fence with the paramaters of length and height.
//take the length and divide that by 8. That number becomes the
//length of my sections. Each section has 1 post and 4 2x4's.
//fenceboards are calculated by taking the total width of the fence
//and dividing by .5. This assumes a fence board width of 6 inches.
//concrete is calculated by taking the fence post count and multiplying
//by 2.
