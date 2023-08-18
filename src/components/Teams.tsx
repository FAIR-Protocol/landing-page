export default function Teams() {
    return (
        <section className="bg-gradient-to-b from-[#e5e6eb] to-[#f4f4f6]  min-h-[100vh] overflow-hidden px-4 ">
            <div className="pt-32 flex flex-col justify-center items-center gap-4">
                <h3 className="md:text-4xl text-3xl font-thin text-black">Meet The Team</h3>
                <p className="text-gray-500 xl:px-96 lg:px-48 px-4 text-center">As three friends scattered throughout Europe, we were looking for a way to discover books and share our own recommendations. Nothing cut the mustard, so we took the challenge on. </p>
                <div className="flex lg:flex-row flex-col items-center xl:gap-8 gap-6 mt-6 pb-20 lg:px-0 px-4 ">
                    <img className="lg:w-80 rounded-xl" src="public/images/teams.jpg" alt="" />
                    <img className="lg:w-80 rounded-xl lg:translate-y-16 lg:-translate-x-2 " src="public/images/teams.jpg" alt="" />
                    <img className="lg:w-80 rounded-xl lg:-translate-x-5" src="public/images/teams.jpg" alt="" />

                </div>
            </div>
        </section>
    )
}