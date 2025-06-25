import data from "../../data"
import Marker from "../assets/marker.png"

export default function Journal() {
    return (
        <main className="">

                {
                    data.map((entry) => (
                        <div key={entry.id} className="py-4 md:flex md:items-center md:justify-center bg-amber-50 shadow-2xl">
                            <div className="overflow-hidden max-w-[400px] max-h-[350px] rounded-2xl m-8 shadow-lg">
                                <img
                                    src={entry.img.src}
                                    alt={entry.img.alt}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="px-8">
                                <div className="flex gap-2">
                                    <img src={Marker} alt="Marker" width={16} className=""/>
                                    <span className="mx-1 uppercase tracking-wide font-medium">{entry.country}</span>
                                    <a href={entry.googleMapsLink} className="text-slate-500 underline text-md">View on Google Maps</a>
                                </div>
                                <div>
                                    <h1 className="text-5xl font-bold pt-2 pb-12">{entry.title}</h1>
                                    <span className="font-bold block mb-4">{entry.dates}</span>
                                    <p className="">{entry.text}</p>
                                </div>
                                <hr className="my-8 "/>
                            </div>


                        </div>
                    ))
                }

        </main>
    )
}