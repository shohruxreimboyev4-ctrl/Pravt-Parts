import React from "react";
import { ArrowRight } from "lucide-react";
import engineImg from "../assets/img/engine.png";
import fuelSvg from "../assets/svg/fuel.svg";
import coolingSvg from "../assets/svg/cooling.svg";
import clutchSvg from "../assets/svg/clutch.svg";
import gearboxSvg from "../assets/svg/gearbox.svg";
import cardanSvg from "../assets/svg/cardan.svg";
import axleSvg from "../assets/svg/axle.svg";
import suspensionSvg from "../assets/svg/suspension.svg";
import wheelsSvg from "../assets/svg/wheels.svg";
import brakesSvg from "../assets/svg/brakes.svg";
import steeringSvg from "../assets/svg/steering.svg";
import electricSvg from "../assets/svg/electric.svg";
import heatingSvg from "../assets/svg/heating.svg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Двигатель",
      items: ["Картеры масляные", "Крышки клапанов", "Насосы масляные"],
      showLink: true,
      color: "border-orange-500",
      bgColor: "bg-gray-50",
      image: engineImg,
    },
    {
      id: 2,
      title: "Система питания",
      color: "border-red-500",
      bgColor: "bg-gray-50",
      image: fuelSvg,
    },
    {
      id: 3,
      title: "Система охлаждения",
      color: "border-red-400",
      bgColor: "bg-gray-50",
      image: coolingSvg,
    },
    {
      id: 4,
      title: "Сцепление",
      color: "border-green-500",
      bgColor: "bg-gray-50",
      image: clutchSvg,
    },
    {
      id: 5,
      title: "Коробка передач",
      color: "border-green-600",
      bgColor: "bg-gray-50",
      image: gearboxSvg,
    },
    {
      id: 6,
      title: "Карданный вал",
      color: "border-green-700",
      bgColor: "bg-gray-50",
      image: cardanSvg,
    },
    {
      id: 7,
      title: "Мост передний\nи задний",
      color: "border-red-500",
      bgColor: "bg-gray-50",
      image: axleSvg,
    },
    {
      id: 8,
      title: "Подвеска",
      color: "border-red-600",
      bgColor: "bg-gray-50",
      image: suspensionSvg,
    },
    {
      id: 9,
      title: "Колеса и ступицы",
      color: "border-red-700",
      bgColor: "bg-gray-50",
      image: wheelsSvg,
    },
    {
      id: 10,
      title: "Тормоза",
      color: "border-blue-400",
      bgColor: "bg-gray-50",
      image: brakesSvg,
    },
    {
      id: 11,
      title: "Рулевое\nуправление",
      color: "border-cyan-400",
      bgColor: "bg-gray-50",
      image: steeringSvg,
    },
    {
      id: 12,
      title: "Электро-\nоборудование",
      color: "border-blue-500",
      bgColor: "bg-gray-50",
      image: electricSvg,
    },
    {
      id: 13,
      title: "Отопление\nи вентиляция",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: heatingSvg,
      isBottom: true,
    },
  ];

  return (
    <div className="w-full bg-white py-8 sm:py-12 px-4">
      {/* Container max 1200px */}
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
          Продажа запасных частей для авто
        </h1>

        {/* Main Grid - 4 columns on large desktop, 2 columns on small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {categories.slice(0, 12).map((category) => (
            <div
              key={category.id}
              className={`bg-white rounded-lg overflow-hidden border-l-[6px] ${category.color} group cursor-pointer hover:shadow-lg transition-shadow duration-300`}
            >
              <div
                className={`${category.bgColor} p-4 sm:p-6 h-[220px] sm:h-[260px] flex flex-col justify-between relative`}
              >
                <div className="z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 whitespace-pre-line leading-tight">
                    {category.title}
                  </h3>

                  {/* Items list - only for first category */}
                  {category.items && (
                    <ul className="space-y-1 mb-3">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-gray-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Link - only for first category */}
                  {category.showLink && (
                    <button className="flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors text-sm sm:text-base mt-2">
                      Перейти
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  )}
                </div>

                {/* Image placeholder - positioned absolute */}
                <div className="absolute right-2 bottom-2 sm:right-4 sm:bottom-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain filter grayscale opacity-30 group-hover:opacity-70 transition-all"
                    />
                  ) : (
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-[10px] sm:text-xs text-gray-400">IMG</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Heating and Catalog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Heating & Ventilation - Left */}
          <div className="bg-white rounded-lg overflow-hidden border-l-[6px] border-blue-700 cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-50 p-4 sm:p-6 h-[200px] sm:h-[240px] flex flex-col justify-between relative">
              <div className="z-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 whitespace-pre-line leading-tight">
                  Отопление
                  <br />и вентиляция
                </h3>
              </div>

              <div className="absolute right-2 bottom-2 sm:right-4 sm:bottom-4 opacity-20">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs text-gray-400">
                    IMG
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Catalog Banner - Right */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg p-6 sm:p-8 text-white relative overflow-hidden h-[200px] sm:h-[240px] flex flex-col justify-between cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                Каталог запасных частей
              </h2>
              <button className="flex items-center font-semibold hover:underline text-sm sm:text-base">
                Перейти
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Decorative circles */}
            <div className="absolute -right-8 -bottom-8 sm:-right-12 sm:-bottom-12 opacity-10">
              <div className="flex gap-2">
                <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 sm:border-8 border-white"></div>
                <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 sm:border-8 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
