import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { dataBase } from "../Data/DataBase";
import TopHeader from "../Header/TopHeader";
import BestOffers from "./BestOffers";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Post from "./Post";

const OfferDetails: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const offer = dataBase.find((el) => el.id === Number(id));
    const [mainImage, setMainImage] = useState(offer?.image1 || "");

    const [selectedDates, setSelectedDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    if (!offer) {
        return <h2>Առաջարկը գտնված չէ:</h2>;
    }

    const imageList = [offer.image1, offer.image2, offer.image3, offer.image4].filter(Boolean);

    const handleSelect = (ranges: any) => {
        setSelectedDates([ranges.selection]);
    };

    return (
        <>
            <TopHeader />
            <div className="p-4">
                <div className="mt-4 flex justify-center items-start space-x-4">
                    <div className="w-[40vw]">
                        <img
                            src={mainImage}
                            className="rounded-lg object-cover w-full h-[60vh]"
                            alt={offer.title}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {imageList.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                className={`rounded-lg object-cover w-[415px] h-full cursor-pointer border-2 ${mainImage === img ? 'border-green-500' : 'border-transparent'
                                    }`}
                                alt={`${offer.title}-${index}`}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-[20px]">
                    <div className="mt-8 bg-gray-50  p-4 rounded-lg shadow-md w-[600px] h-full">
                        <h2 className="text-lg font-semibold mb-4">Հայտարարության մասին</h2>
                        <div className="flex flex-col space-y-1 text-sm">
                            <div className="flex"><strong>Կոդ:</strong><p>{offer.code}</p></div>
                            <div className="flex"><strong>Հասցե:</strong><p>{offer.address}</p></div>
                            <div className="flex"><strong>Գիշերակաց:</strong><p>{offer.overnight}</p></div>
                            <div className="flex"><strong>Շինության մակերես:</strong><p>{offer.buildingArea}</p></div>
                            <div className="flex"><strong>Ընդհանուր մակերես:</strong><p>{offer.totalArea}</p></div>
                            <div className="flex"><strong>Մարդկանց քանակ:</strong><p>{offer.peopleCount}</p></div>
                            <div className="flex"><strong>Գիշերակացով քանակ:</strong><p>{offer.overnightCount}</p></div>
                            <div className="flex"><strong>Սենյակների քանակ:</strong><p>{offer.roomCount}</p></div>
                            <div className="flex"><strong>Սանհանգույցների քանակ:</strong><p>{offer.bathroomCount}</p></div>
                            <div className="flex"><strong>Լողավազան:</strong><p>{offer.pool}</p></div>
                        </div>
                    </div>
                    <div className="mt-8 bg-gray-50  p-4 rounded-lg shadow-md w-[370px] h-full">
                        <h2 className="text-lg font-semibold mb-4">Նշեք Ձեր ցանկալի օրերը</h2>
                        <DateRange
                            editableDateInputs={true}
                            onChange={handleSelect}
                            moveRangeOnFirstSelection={false}
                            ranges={selectedDates}
                        />
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-md w-[1650px] ">
                        <h2 className="text-lg font-semibold mb-4">Ընդհանուր նկարագրություն</h2>
                        <div className="text-sm space-y-2">
                            <p>Ծաղկաձորում՝ օրավարձով է տրվում հարմարավետ և ընդարձակ քոթեջ ։</p>
                            <p>Բաղկացած է՝</p>
                            <ul className="list-disc list-inside pl-4">
                                <li>Հյուրասենյակ</li>
                                <li>Խոհանոց</li>
                                <li>3 ննջասենյակներ</li>
                                <li>1 սանհանգույց</li>
                                <li>Շոգեբաղնիք</li>
                                <li>Ջակուզի</li>
                                <li>Տաքացվող տակառ</li>
                                <li>Տաղավար նախատեսված 15 անձի համար</li>
                                <li>Սպասք</li>
                                <li>Wi-Fi</li>
                                <li>Խորովածի վառարան, շամփուրներ</li>
                                <li>Գամակ</li>
                                <li>Անկողնային պարագաներ</li>
                            </ul>
                            <p>Նախատեսված է 6-8 անձի համար:</p>
                            <p className="font-semibold">Տնակի մեկ օրվա արժեքը՝</p>
                            <ul className="list-disc list-inside pl-4">
                                <li>1-6 անձ - 65.000 դրամ</li>
                                <li>7-8 անձ - 90․000 դրամ</li>
                            </ul>
                            <p><strong>Մուտք:</strong> 14:00</p>
                            <p><strong>Ելք:</strong> 12:00</p>
                            <p>Տնակում առկա է ամեն ինչ, ձեր օրը հիշարժան և հնարավորինս հարմարավետ դարձնելու համար: Մենք երաշխավորում ենք ձեր հիասքանչ հանգիստն ու հարմարավետության զգացումը ողջ ընթացքում:</p>
                            <p>Ամրագրման կամ այլ մանրամասների համար գրեք կամ զանգահարեք նշված հեռախոսահամարով:</p>
                        </div>
                    </div>
                </div>

                <hr className="my-8" />
                <BestOffers selectedRegion={offer.description} />
            </div>
                <Post/>
        </>
    );
};

export default OfferDetails;
