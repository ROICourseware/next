import Image from "next/image";

export const metadata = {
    title: 'New Dawn Fades',
    description: 'Nick de Belgny Publishing - New Dawn Fades: a Science Fiction mystery by Kevin Rattan',
    keywords: 'New Dawn Fades, Kevin Rattan, Science Fiction, mystery',
};

export default function Page() {
    return (
        <main role="main" className="brown">
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6 col-sm-push-6">
                            <div className="mu-hero-right">
                                <Image src="/images/ndf.jpg" className="cover" alt="Front cover of New Dawn Fades" height="650" width="406" />
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-sm-pull-6">
                            <div className="mu-hero-left">
                                <h1>New Dawn Fades</h1>
                                <div>
                                    <p className="quote"><em>"The Noyim are a race of perverts, corrupt of body and of mind!
                                        You should be happy there."
                                    </em>
                                    </p>
                                    <p> Thus did Bey's grandfather send him into exile. And Bey has indeed been happy &mdash;
                                        until now.
                                    </p>
                                    <p>
                                        Because now Bey's in deep trouble. His rich young friend Sanja Gwahnal is dead,
                                        killed by contraband biological technology, and suddenly everyone has Bey in
                                        their sights.
                                    </p>
                                    <p>

                                        The Commonwealth &mdash; Bey's own people &mdash; are pushing him to spill the name of
                                        Sanja's bi-tech dealer. The dealer has other ideas. He'd like Bey silenced &mdash;
                                        permanently.
                                    </p>
                                    <p>

                                        The locals are pushing him to blame Sanja's parents for the murder: on Noyan,
                                        children decide if their parents live or die, and Sanja Gwahnal was approaching
                                        the age of Choosing...
                                    </p>
                                    <p>

                                        And then things start to get complicated.
                                    </p>
                                    <p>

                                        What do traditionalist terrorists want with him? Was Sanja really involved with
                                        fanatics determined to keep Noyan free of foreign influence? And what was his
                                        relationship with a known agent of the Commonwealth's arch-rivals, the Autarchy
                                        of Gallask?
                                    </p>
                                    <p>

                                        New Dawn Fades is a novel of colonialism and conspiracy, of clashing cultures
                                        and technologies &mdash; a murder mystery on a world with a moral code like no other.
                                    </p>

                                </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="mu-hero">
                                    <h2 className="mu-hero">Buy New Dawn Fades</h2>
                                    <p><a href="https://www.amazon.com/dp/B0DCWB8Q9R">New Dawn Fades</a> is available in hardback, paperback and on Kindle, direct from Amazon or on order from good bookshops
                                        everywhere.</p>
                                    <p>Kindle Unlimited members can read New Dawn Fades free of charge..</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    );
}
