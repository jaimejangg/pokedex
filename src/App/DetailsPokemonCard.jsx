import { useState } from "react";
import pokeImage from "../assets/images/pokeball.png";
import Switch from "./components/detailsCardPokemon/Switch";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function DeatilsPokemonCard({ pokemon }) {
  const [showChart, setShowChart] = useState(false);
  return (
    <>
      <div className="mx-auto flex items-center justify-center w-full rounded-full">
        <div className="flex w-full items-center">
          <img
            className="mx-auto h-20 w-20 rounded xl:w-20 xl:h-20 position absolute"
            src={pokeImage}
            alt=""
          />
        </div>
        <div className="flex flex-row-reverse items-center w-full h-full">
          <div className="flex flex-col">
            <div className="text-gray-800 font-bold">{pokemon.name}</div>
            <div className="text-gray-800">#{pokemon.id}</div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center w-full h-full">
          <div className="flex flex-col items-center">
            <div className="text-gray-800">
              <span className="font-bold text-gray-600">Height:</span>{" "}
              {pokemon.height}
            </div>
            <div className="text-gray-800">
              <span className="font-bold text-gray-800">Weight:</span>{" "}
              {pokemon.weight}
            </div>
            <div className="flex flex-col items-center"></div>
          </div>
        </div>
      </div>
      <img
        className="mx-auto  object-cover"
        src={pokemon.sprites.other.dream_world.front_default}
        alt="pokemonImage"
      />
      <div className="mt-3 text-center sm:mt-5">
        <div>
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className="inline-flex my-1 items-center px-3 py-0.5 rounded mx-1 text-sm font-medium bg-green-100 text-green-800"
            >
              {type.type.name}
            </span>
          ))}
        </div>

        <div className="relative mt-3">
          <div className="flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-lg font-medium text-gray-900">
              Statistics
            </span>
          </div>

          <div className="flex justify-center w-full">
            <div className="px-3 bg-white text-lg font-medium text-gray-900 w-full">
              {pokemon.stats.map(
                (stat) =>
                  showChart === false && (
                    <div className="relative pt-1" key={stat.stat.name}>
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                            {stat.stat.name}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-pink-600">
                            {stat.base_stat}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                        <div
                          style={{ width: `${stat.base_stat}%` }}
                          className="shadow - none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                        ></div>
                      </div>
                    </div>
                  )
              )}
              {showChart === true && (
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"
                    data={pokemon.stats.map((stat) => {
                      return {
                        stat: stat.stat.name,
                        A: stat.base_stat,
                        B: 90,
                        fullMark: 150,
                      };
                    })}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="stat" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar
                      name="Mike"
                      dataKey="A"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              )}
              <div>
                <p>Chart View</p>
                <Switch showChart={showChart} setShowChart={setShowChart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
