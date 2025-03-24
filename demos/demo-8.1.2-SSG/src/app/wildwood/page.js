import Image from "next/image";

export const metadata = {
    title: 'FRL2: The Wildwood',
    description: 'The second book in the Fairy Rescue League series  by Kevin Rattan',
    keywords: 'Fairy Rescue League: The Wildwood, Kevin Rattan, childrens books, fantasy, fairies',
};


export default function Page() {
    return (
        <main role="main" className="purple">
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6 col-sm-push-6">
                            <div className="mu-hero-right">
                                <Image className="img-responsive" width="488" height="780" src="/images/wildwood.jpg" alt="Front cover of The Fairy Rescue League 2: The Wildwood" />
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-sm-pull-6">
                            <div className="mu-hero-left">
                                <h1>FRL 2: The Wildwood</h1>
                                <div className="quote">
                                    <p>
                                        Adam Ellwin is doing Hard Time: Solitary Confinement with Hard Labor. Three days ago, the Brown Man went crazy and tried
                                        to kill everyone. Adam's been grounded ever since. With any luck, he'll be free again
                                        by the end of today - but for how long? </p>
                                    <p>
                                        It's hard to stay out of trouble when there are fairies in the house, especially when one's a mischievous boggart like Hobin,
                                        and the other's Holly - a baking-obsessed brownie with a stubborn streak a mile wide.
                                        Even the garden isn't safe - Granny Goggie's out there, prowling around in a bad
                                        mood. Dad's cut off her scrumpy supply, and she ís dangerously sober.
                                    </p>
                                    <p>
                                        Worse still, Adam's best friend, Sophie, keeps banging on about the Fairy Rescue League. She's full of ideas - every single
                                        one of which would get him grounded and make him miss the village fete. And if that
                                        isn't bad enough, there's the small matter of the Green Man, a fairy god, living
                                        at the bottom of the garden with plenty of ideas of his own....
                                    </p>
                                </div>
                                <div className="mu-hero">
                                    <br />
                                    <p>The Wildwood is the second book of the Fairy Rescue League, a children's fantasy series for 9-12 year olds.</p>
                                    <br />
                                    <h2>Buy The Fairy Rescue League 2: The Wildwood</h2>
                                    <p><a href="https://www.amazon.com/gp/product/B00S0GEMC8">The Wildwood</a> is available in hardback, paperback and on Kindle, direct from Amazon or on order from good bookshops
                                        everywhere.</p>
                                    <p>Kindle Unlimited members can read The Wildwood free of charge.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
