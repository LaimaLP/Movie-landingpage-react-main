import { Section2 } from "./Section2";
import { Section } from "./Section";
import tv from '../../img/tv.png';
import img3 from '../../img/appleTV.png';
import img4 from '../../img/kids.png';
import mini from '../../video/mini.mp4';
import mini2 from '../../video/mini2.mp4';





export function Sections() {
    const sectionData = [
        {
            sectionType: "leftText",
            title: "Enjoy on your TV",
            sectionText: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            srcNameVideo: mini2,
            srcNameImg: tv,
        },
        {
            sectionType: "rightText",
            title: "Download your shows to watch offline",
            sectionText: "Save your favorites easily and always have something to watch.",
            onlyImg: true,
        },
        {
            sectionType: "leftText",
            title: "Watch everywhere",
            sectionText: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            srcNameVideo: mini,
            srcNameImg: img3,
        },
        {
            sectionType: "rightText",
            title: "Create profiles for kids",
            sectionText: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
            srcNameImg: img4,
        }
    ]
  
    return (
        <div>
         
            {sectionData.map((item, idx) => {
                return(item.sectionType === "leftText"
                ?  <Section key={idx} data={item} />
                :  <Section2 key={idx} data={item} />
                )  
            }
            )}
        </div>
    )
};