
import LandingImage from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
         <div className="bg-white rounded-lg shadow-md py-8 flex-col gap-7 text-center -mt-20 ml-14">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600 ">
                Tuck into a takeway today
            </h1>
            <span className="text-xl">Food is just a click away!</span>
         </div>
         <div className="grid md:grid-cols-2 gap-5">
            <img src={LandingImage} title="LandingPic" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order takeaway even faster!
                </span>
                <span>
                    Download the Achba3Makla App for faster ordering and personalised recommendations 
                </span>
                <img src={appDownload} title="Achba3Download"/>
                
            </div>
         </div>
    </div>
  )
}
