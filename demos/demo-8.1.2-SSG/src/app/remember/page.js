import Image from "next/image";

export const metadata = {
    title: 'Remember, Remember',
    description: 'Remember, Remember is a Science Fiction picture book by Kevin Rattan',
    keywords: 'Remember Remember, Picture book, Kevin Rattan, Science Fiction, Post Apocalypse, Santa Caluse, Father Christmas, Bonfire Night, Guy Fawkes'
};
export default function Page() {
    return (
        <main role="main" className="orange">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-sm-push-6">
                            <div className="mu-hero-right">
                                <Image src="/images/remember.jpg" className="cover" alt="Front cover of Remember, Remember" width="500" height="400" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-sm-pull-6">
                            <div className="mu-hero-left">
                                <h1>Remember, Remember</h1>
                                <div className="quote">
                                    <p>
                                        <em>Remember, Remember the 5th of November...</em>
                                    </p>
                                    <p>
                                        A little girl is growing up in a bleak, post-apocalyptic Britain, but at least she has something to look forward to: Fawkesfeast is coming.
                                    </p>
                                    <p>
                                        It's just a pity Uncle Albert, with his big red nose, didn't get to be Santa this year. But it'll still be fun. She's quite sure the Fawkesfeast is one of the few things that’s exactly the same as it was before the Great Change. Surely even back then there was a big bonfire, and Santa gave everyone presents, and some lucky child got to be the Inky Dev...
                                    </p>
                                    <p>
                                        <strong>Remember, Remember</strong> is a picture book for adults. It is not suitable for under-13s.
                                    </p>
                                    <p>
                                        <strong>Remember, Remember</strong> supports guided view for smaller devices, but is best read in landscape as a series of pages.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <div className="mu-hero">
                                <br />
                                <h2>Buy Remember, Remember</h2>
                                <p>Remember, Remember is available iin hardback, paperback and on Kindle, direct from Amazon
                                    or on order from good bookshops everywhere.
                                </p>
                                <p>Kindle Unlimited members can read Remember, Remember free of charge..</p>
                                <p>
                                    <a href="https://www.amazon.com/Remember-Kevin-Rattan-ebook/dp/B0C26GJJN5">Buy Remember, Remember on Amazon</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}
