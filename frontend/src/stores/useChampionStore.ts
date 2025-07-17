import type { Champion } from "@/interfaces/ChampionInterface";
import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

const useChampionStore = defineStore('champions', () => {
  const champions: Ref<Champion[]> = ref([
    {
      name: "Braum",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Braum.png",
      gender: "Male",
      positions: ["Support"],
      species: ["Human, Iceborn"],
      resource: "Mana",
      rangeType: ["Melee"],
      regions: ["Freljord"],
      releaseYear: "2014"
    },
    {
      name: "Gnar",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Gnar.png",
      gender: "Male",
      positions: ["Top"],
      species: ["Yordle"],
      resource: "Rage",
      rangeType: ["Ranged", "Melee"],
      regions: ["Freljord"],
      releaseYear: "2014"
    },
    {
      name: "Bard",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Bard.png",
      gender: "Male",
      positions: ["Support"],
      species: ["Celestia"],
      resource: "Mana",
      rangeType: ["Ranged"],
      regions: ["Runeterra"],
      releaseYear: "2015"
    },
    {
      name: "Akshan",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Akshan.png",
      gender: "Male",
      positions: ["Middle"],
      species: ["Human"],
      resource: "Mana",
      rangeType: ["Ranged"],
      regions: ["Shurima"],
      releaseYear: "2021"
    },
    {
      name: "Pyke",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Pyke.png",
      gender: "Male",
      positions: ["Support"],
      species: ["Revenant"],
      resource: "Mana",
      rangeType: ["Melee"],
      regions: ["Bilgewater"],
      releaseYear: "2018"
    },
    {
      name: "Yone",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Yone.png",
      gender: "Male",
      positions: ["Middle", "Top"],
      species: ["Human", "Magically Altered"],
      resource: "Manaless",
      rangeType: ["Melee"],
      regions: ["Ionia"],
      releaseYear: "2020"
    }
  ].sort((a, b) => a.name.localeCompare(b.name)));

  function getAvailableChampions(guessedNames: Set<String>): Champion[] {
    return champions.value.filter(x => !guessedNames.has(x.name));
  }

  function getGuessedChampions(guessedNames: Set<String>): Champion[] {
    return champions.value.filter(x => guessedNames.has(x.name));
  }

  return { champions, getAvailableChampions, getGuessedChampions }
});

export default useChampionStore;