/**
 * 
 * props: {
 *  subheader:"GPS OFFLINE NAVIGATION"
 * 
 * }
 * 
 * 
 * 
 * 
 */

export const Features = (props: any) => {

  /* If we were to create it manually, but react does it
  const props = {
    subheader: "GPS OFFLINE MAP NAVIGATION"
  }*/

  return (
    <div>
      <div>
        <h3>{props.subheader}</h3>
        <h2>KAYA TAKES YOU RIGHT TO THE CLIMB</h2>
        <p>Save time on the approach and spend more time climbing with verified parking, trails,pins, and topos.</p>
      </div>
      <div>
        {/* add this in later <img /> */}
      </div>
    </div>
  );
};