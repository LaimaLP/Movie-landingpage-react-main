import style from './Questions.module.css'
// import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { QuestionItem } from './QuestionItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputEmail } from '../../header/InputEmail';




export function Questions() {
  const content = [{
    header: "What is BitMovie?",
    body: "BitMovie is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. {'\n'} You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
  },

  {
    header: "How mush does BitMovie cost?",
    body: "Watch BitMovie on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts."
  },

  {
    header: "Where can I watch?",
    body: "Watch anywhere, anytime. Sign in with your BitMovie account to watch instantly on the web at BitMovie.com from your personal computer or on any internet-connected device that offers the BitMovie app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take BitMovie with you anywhere. "
  },
  {
    header: "How do I cancel?",
    body: "BitMovie is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    header: "What can I watch on BitMovie?",
    body: "BitMovie has an extensive library of feature films, documentaries, TV shows, anime, award-winning BitMovie originals, and more. Watch as much as you want, anytime you want."
  },
  {
    header: "Is BitMovie good for kids?",
    body: "The BitMovie Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  },
  {
    header: "Why am i seeing this language?",
    body: "Your browser preferences determine the language shown here."
  },
  ]

  return (
    <div className={style.questionSection} >
      <h1>Frequently Asked Questions</h1>
      <Accordion id={style.accordBlock} >
        {content.map((item, idx) => <QuestionItem itemKey={idx} header={item.header} body={item.body} />)}
      </Accordion>
      <div className={style.inputEmailTextContainer}>
        <p> Ready to watch? Enter your email to create or restart your membership. </p>
        <InputEmail />
      </div>
    </div>
  );
}
