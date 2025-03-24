import Image from "next/image";

export const metadata = {
    title: 'Elementary',
    description: 'Elementary is a children\'s fantasy by Kevin Rattan',
    keywords: 'Elementary, Elementals, Sylpth, Gnome, Undine, Salamander, Alchemy, Prima Materia, Kevin Rattan, childrens books, fantasy',
};

export default function Page() {
    return (
        <main role="main" className="orange">
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6 col-sm-push-6">
                            <div className="mu-hero-right">
                                <Image src="/images/elementary.jpg" className="cover" alt="Front cover of Elementary" width="488" height="781" />
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-sm-pull-6">
                            <div className="mu-hero-left">
                                <h1>Elementary</h1>
                                <div className="quote">
                                    <p>
                                        “Have you ever heard of the Elementals, magical spirits of Fire, Water, Earth and Air? I hadn't. I still wouldn't have, if
                                        my little sister Rachel hadn't knocked her latest toy into the fire.</p>
                                    <p>
                                        Okay, so it never would have happened if Mike and I hadn't been playing piggy-in-the-middle with her and her stupid little
                                        trinket. But how was I to know the Elementals were imprisoned inside? Or that once
                                        it cracked open, our house was going to become Elemental Central?
                                    </p>
                                    <p>
                                        Not your usual problem, you'll admit. Tricky, even. Likely to displease mum and dad, if they find out. Which I hope they
                                        don't - especially since Mike has been using the Elementals to get revenge on teachers.
                                        Not a great idea, as it turns out. And it's not like we didn't have enough trouble
                                        already, what with the trinket's original owner wanting to get it back, and not caring
                                        who gets hurt in the process.
                                    </p>
                                    <p>
                                        Sometimes, I wish I'd done what I wanted to do that first night when the house went crazy – packed my bags and headed for
                                        the horizon.”
                                    </p>
                                </div>
                            </div>
                            <div className="mu-hero">
                                <br />
                                <h2>Buy Elementary</h2>
                                <p>Elementary is available iin hardback, paperback and on Kindle, direct from Amazon
                                    or on order from good bookshops everywhere.
                                </p>
                                <p>Kindle Unlimited members can read Elementary free of charge..</p>
                                <p>
                                    <a href="https://www.amazon.com/dp/B00I2R644Y">Buy Elementary on Amazon</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </main >
    );
}
