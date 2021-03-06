import React, { Component } from "react";

import FAQuestion from "../components/FAQuestion";

export default class Faq extends Component {
    render() {
        return (
            <div className="container">
                <p className="p-sm" />
                <h2>Frequenty Asked Questions</h2>
                <p className="p-sm" />
                <FAQuestion
                    q={
                        "Why Vienna? How did you become interested in that city?"
                    }
                    p1={
                        "I have written a dozen books and hundreds of articles for newspapers, magazines, and encyclopedias. A full half of my published travel books, historical narratives, biographies, thrillers, and mysteries deal with or are set in Vienna, Austria. This is more than a quirk on my part. I was a student in Vienna in 1968, and went on to live in that city, and in other parts of Europe, for roughly the next twenty years."
                    }
                    p2={
                        "I admit to being more than partly in love with Vienna. Having grown up in a small coastal town in Oregon, I was charmed and amazed by the Austrian capital, my first big city. And this was 1968, when, as a dear friend of mine liked to say, Vienna was still in the Moose Lodge stage of development. My landlady rationed my baths to once weekly; there were roughly torn squares of the daily Kurier newspaper dangling on a string from a bent nail in the clo to be used as toilet paper; beer, of a delicious species I had never known existed, was fifteen cents the pint; a good schnitzel cost less than a buck; ten p.m. was considered late; Bill Haley and His Comets still had pride of place in juke boxes. It was love at first sight. Vienna in the Sixties and Seventies had the rough-hewn quality of Dublin in the Eighties; both have since gone distinctly uptown. I liked them better as the down-at-heel dowagers they once were."
                    }
                    p3={""}
                />
                <FAQuestion
                    q={"Have you always wanted to write?"}
                    p1={
                        "My year of college in Vienna provided a revelation of a different sort, as well: I discovered that I wanted to write. Weaned of television for the first time since I was five, I found that writing was not simply a youthful pose, but was instead something I needed to do. Vienna served as my Paris for the next decades: it was cheap, friendly, accommodating, full of music, and bristling with spies. Vienna was situated only miles away from the communist satellite countries of Czechoslovakia and Hungary. I had my personal watcher, a pale, slim fellow who showed up at the oddest times and places. You felt on the edge in Vienna in those years, though it was at heart the coziest of bourgeois cities. Vienna was, and will always be, my second home; my daughter was born there, and I came to a facsimile of adulthood there."
                    }
                    p2={
                        "I soon found a theme that I have explored for several decades: the amazing renaissance of Vienna 1900. That culture and epoch created the modern sensibility through the works of such seminal artists, writers, and thinkers as Gustav Klimt, Oskar Kokoschka, Egon Schiele, Otto Wagner, Adolf Loos, Arthur Schnitzler, Sigmund Freud, Gustav Mahler, Arnold Schoenberg, and Ludwig Wittgenstein, among many others. Vienna 1900 was also the breeding ground for such future tyrants as Trotsky, Stalin, and Hitler, all of whom also spent time in the city. My Hitler in Vienna, 1907-1913: Clues to the Future began this exploration, juxtaposing the largely Jewish-led ferment in culture against the early down-and-out years of Hitler. I went on to write guides, Vienna Inside Out and Viennawalks, as well as the World War II thriller, Time of the Wolf, all of them inspired by my researches and years of living in Vienna."
                    }
                    p3={""}
                />
                <FAQuestion
                    q={
                        "How did you get the idea for the Viennese Mystery series?"
                    }
                    p1={
                        "In the mid 1990s I first toyed with creating a historical mystery series set in Vienna 1900. Early attempts had Mark Twain and then Thomas Edison as the protagonists. Finally, however, I hit on using a character from those abortive novels, Hanns Gross, the real-life “father of criminology,” as one of the major characters in a new attempt at a series. Methods of modern crime detection, including crime-scene preservation, the gathering and examination of footprints and fingerprints, the study of blood traces and weapons, handwriting analysis, and the vetting and interviewing of witnesses and suspects, were established by Gross in his decades as an investigative magistrate (at once an investigating officer and circuit court judge). Later, as the first professor of criminology in the Habsburg realms, Gross codified his principles in hundreds of articles and in the classic texts Criminal Investigation and Criminal Psychology. In many ways, Gross was the inspiration for Arthur Conan Doyle’s Sherlock Holmes."
                    }
                    p2={
                        "The series really took off, however, when I struck on my real protagonist, a fictional lawyer named Karl Werthen. Werthen, when we meet him, is in wills and trusts, having given up criminal law several years earlier for reasons we do not at first understand. Meanwhile, he fills out the missing parts of his creative life by penning precious short stories that few read. This all changes one morning when a client of his, the controversial artist Gustav Klimt, comes to him for help: the police suspect him as the perpetrator of a series of grisly murders in Vienna during the summer of 1898. Werthen soon calls in his old colleague, Gross, to aid in this case."
                    }
                    p3={""}
                />
                <FAQuestion
                    q={"Tell us a bit about the books in the series:"}
                    p1={
                        "Our duo makes its debut in The Empty Mirror, a novel which features, among other luminaries of Vienna 1900 such as Klimt, the sexologist Richard Freiherr von Krafft-Ebing, the Habsburg heir apparent, Archduke Franz Ferdinand, and the founder of Zionism, Theodor Herzl."
                    }
                    p2={
                        "Werthen and Gross return for a second installment, Requiem in Vienna, in which the composer Gustav Mahler is at the center of the action. Each book in the series features one or more actual historical figures from the time in an exploration of a society on the edge of the momentous changes, an imperial culture locked on a path toward the convulsions of World War I."
                    }
                    p3={
                        "I feel as if I have finally come to my true writing home with these Viennese mysteries. They allow me a happy blend of research and fiction. As the series progresses, I have become more familiar with Werthen, his family, and friends. It is an association I hope to cultivate for many years."
                    }
                />
            </div>
        );
    }
}
