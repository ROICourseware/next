import Image from "next/image";

export const metadata = {
    title: 'Kevin Rattan : Home',
    description: 'Home page of Kevin Rattan, compputer consultant and author',
    keywords: 'Kevin Rattan,  New Dawn Fades,Remember, Remember, Science Fiction, children\'s fantasy, Google Cloud Authorized Trainer, Programmer, Consultant'
};

export default function Page() {
    return (
        <main role="main" className="green">
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6 col-sm-push-6">
                            <div className="mu-hero-right">
                                <Image src="/images/montage.jpg" alt="Kevin Rattan" width="505" height="693" />
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-sm-pull-6">
                            <div className="mu-hero-left">
                                <h1>Kevin Rattan</h1>
                                <p>Kevin Rattan is a writer and computer consultant.</p>
                                <p>As a writer, Kevin specializes in children's fantasy &ndash; though he has published teen fiction and adult Science Fiction. 
                                    His most recent novel is "New Dawn Fades", a Science Fiction mystery set on a world where children decide if their 
                                    parents live or die.
                                </p>
                                <p>As a consultant, Kevin works primarily in web and cloud development and training.</p>
                                <p>
                                    Kevin has degrees in Political Philosophy and the History of Political Thought, and is a Google Authorized Trainer, 
                                    Google Certified Professional Cloud Developer and Associate Cloud Engineer.
                                </p>
                                <p>Kevin has taught groups as small as 1 and as large as 1000, and is a full stack web developer as well as a 
                                    trainer/instructor. He has worked as a TV script writer, youth worker and even a temporary secretary - in addition to doing so many
                                    different jobs in television production (cameraman, extra, autocue operator, script reader, subtitler, production
                                    secretary...) that he can’t even remember all of them.
                                </p>
                                <p>Kevin is half German and half Indian, was born in England, and lives in the United States.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
