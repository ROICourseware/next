import Image from "next/image";

export const metadata = {
    title: 'The Fairy Rescue League',
    description: 'Nick de Belgny Publishing - The Fairy Rescue League. First book in the Fairy Rescue League Series',
    keywords: 'Fairy Rescue League, Kevin Rattan, childrens books, fantasy, fairies',
};

export default function Page() {
    return (
        <main role="main" className="green">
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6 col-sm-push-6">
                            <div className="mu-hero-right">
                                <Image className="img-responsive" src="/images/kindlecover.jpg" width="488" height="781" alt="Front cover of The Fairy Rescue League" />
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-sm-pull-6">
                            <div className="mu-hero-left">
                                <h1> The Fairy Rescue League</h1>
                                <p style={{ fontSize: 1.5 + 'em' }}>Book 1 in the Fairy Rescue League Series</p>
                                <div className="quote">
                                    <p>
                                        “I wonder if getting electrocuted would kill a boggart. There's no point asking Hobin. He won't know. Hobin doesn't do electricity.
                                        It's way too modern for him. And since he's the last of the boggarts, there's no-one else I can ask.
                                    </p>
                                    <p>
                                        I know he was hurt when he bit through the cable on mum's new cooker. There was a loud bang and he went flying across the
                                        kitchen. I couldn't let him do it again in case he really hurt himself. So I showed him how to unplug things instead.
                                    </p>
                                    <p>
                                        The problem is, as soon as we go to bed he goes around and unplugs everything in the kitchen, including the fridge and the
                                        freezer.
                                    </p>
                                    <p>
                                        And mum and dad think it's all my fault.
                                    </p>
                                    <p>
                                        If there's one thing Hobin's good at, it's getting me in trouble.”
                                    </p>
                                </div>

                                <p>Hobin has lived at Ellwin Hall since time out of mind. Twelve year old Adam Ellwin has always thought Hobin was the
                                    last of the fairies - but then he happens upon a starving fairy on a trip to a stately home. Hobin isn't at all
                                    pleased when Adam brings the new fairy home. He goes on the rampage, and that's only the start of Adam's problems.
                                    It turns out that there are more fairies out there – and they all have a knack for getting Adam into trouble. So
                                    does Sophie, Adam's best friend, with her crackpot idea about the Fairy Rescue League…</p>
                                <br />
                                <p>The Fairy Rescue League is a children's fantasy for 9-12 year olds, and is the first book in the Fairy Rescue League
                                    Series.</p>

                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <div className="mu-hero">
                                <h2 className="mu-hero">Buy The Fairy Rescue League</h2>
                                <p><a href="https://www.amazon.com/Fairy-Rescue-League-Kevin-Rattan-ebook/dp/B00D0B9836">The Fairy Rescue League</a> is available in hardback, paperback and on Kindle, direct from Amazon or on order from good bookshops
                                    everywhere.</p>
                                <p>Kindle Unlimited members can read The Fairy Rescue League free of charge..</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
