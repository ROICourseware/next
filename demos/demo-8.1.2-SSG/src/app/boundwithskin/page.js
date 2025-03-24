import Image from "next/image";

export const metadata = {
    title: 'Bound With Skin',
    description: 'Nick de Belgny Publishing - Bound With Skin: a dark teenage fantasy by Kevin Rattan',
    keywords: 'Bound With Skin, Kevin Rattan, Teenage Fantasy, fantasy, faeries',
};

export default function Page() {
    return (
        <main role="main" className="brown">
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6 col-sm-push-6">
                            <div className="mu-hero-right">
                                <Image src="/images/Bound.jpg" className="cover" height="650" width="500" alt="Front cover of Bound With Skin" />
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-sm-pull-6">
                            <div className="mu-hero-left">
                                <h1>Bound With Skin</h1>
                                <div >
                                    <p className="quote"><em>“Changelings are made in Faerie from earth,
                                        water, fire and air, bound with skin. Made to
                                        be used and abandoned. Made so faeries can steal
                                        a human baby - and without a care in the world
                                        for the changeling they leave behind…”</em>
                                    </p>
                                    <p>Tom has a secret.</p>
                                    <p>He hasn't told Christine about Mr. Harkness, or
                                        the great Realms of Faerie. And he hasn't told
                                        her who, and what, he really is.</p>
                                    <p>But now Tom has turned 14, and is coming into
                                        his birthright. He can no longer hide the
                                        truth - not after he crossed over to the
                                        Moorland Realm, and took Chris with him.</p>
                                    <p>Nor is Tom's the only secret to be revealed.
                                        It falls to the tramp, Old John, to explain
                                        the terrible price that must be paid by those
                                        born of the union between mortal man and
                                        immortal faerie. It is a price that sends
                                        Tom on a dark journey in search of meaning,
                                        a soul, and escape from the dreadful
                                        inevitability of death.</p>
                                </div>
                                <br />
                                <div className="mu-hero">
                                    <h2 className="mu-hero">Buy Bound With Skin</h2>
                                    <p><a href="https://www.amazon.com/dp/B07L7BH6T8">Bound With Skin</a> is available in hardback, paperback and on Kindle, direct from Amazon or on order from good bookshops
                                        everywhere.</p>
                                    <p>Kindle Unlimited members can read Bound With Skin free of charge..</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
