import data from "../../data"
import Marker from "../assets/marker.png"

export default function Journal() {
    return (
        <main>

                {
                    data.map((entry) => (
                        <div key={entry.id} className="py-4 md:flex items-center justify-center bg-amber-50">
                            <div className="overflow-hidden max-w-[400px] max-h-[200px] rounded-2xl m-8">
                                <img
                                    src={entry.img.src}
                                    alt={entry.img.alt}
                                    className="w-full h-full object-cover"
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
                            </div>

                        </div>
                    ))
                }

        </main>
    )
}