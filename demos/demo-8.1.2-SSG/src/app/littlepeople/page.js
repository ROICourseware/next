import Image from "next/image";

export const metadata = {
    title: 'FRL3: The Little People',
    description: 'The third book in the Fairy Rescue League series by Kevin Rattan',
    keywords: 'Fairy Rescue League: The Little People, Kevin Rattan, childrens books, fantasy, fairies',
};

export default function Page() {
    return (
        <main role="main" className="orange">
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6 col-sm-push-6">
                            <div className="mu-hero-right">
                                <Image src="/images/frl3kindlecover.jpg" width="500" height="800" className="cover"
                                    alt="Front cover of The Fairy Rescue League 3: The Little People" />
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-sm-pull-6">
                            <div className="mu-hero-left">
                                <h1> FRL3: The Little People</h1>
                                <div className="mu-hero">
                                    <p>Life at Ellwin Hall used to be easy. There was just mum, dad and me – Adam. And
                                        Hobin, of course. He's our resident boggart - the last of the fairies. Or that's
                                        what we thought.</p>
                                    <p>Then I went and rescued Holly, a starving brownie. One thing led to another, and
                                        now we have more fairies than we know what to do with. There's Holly, driving
                                        mum crazy in the kitchen. And Granny Goggie, the scrumpy-loving maniac in the
                                        walled garden. And little Gunna roaming around with his adoring flock of
                                        chickens - and tearing down the fence around the chicken-run, just when dad was
                                        done rebuilding it...
                                    </p>
                                    <p>It's like they <em>want</em> to get me in trouble. Dad's put his foot down. The
                                        Fairy Rescue League is out of business. Sophie, Ginger and I are not to rescue
                                        any more fairies - or else.
                                    </p>
                                    <p>But nobody's told the fairies that…
                                    </p> <br />
                                    <p>The Little People is the third book of the Fairy Rescue League, a children's
                                        fantasy series for 9-12 year olds.</p>
                                    <br />
                                    <h2>Buy The Fairy Rescue League 3: The Little People</h2>
                                    <p><a href="https://www.amazon.com/gp/product/B08LC5LY2G">The Little People</a> is avaliable in hardback, paperback and on Kindle, direct from Amazon or
                                        on order from good bookshops everywhere.</p>
                                    <p>Kindle Unlimited members can read The Little People free of charge.
                                    </p>
                                </div>
                            </div>
                        </div>


                        '

                    </div>
                </div>
            </section>


        </main>
    );
}
