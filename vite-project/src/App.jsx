import { Routes, Route } from 'react-router-dom';
import Abilities from './assets/Components/Abilities';
import PokemonCardList from './PokemonCardList';
import './App.css';
import './Abilities.css';
import Effect_Changes from './assets/Components/Effect_Changes';
import LanguageNames from './assets/Components/LanguageNames';
import Abilities_Child from './assets/Components/Abilities_Child';
import Flavor_Text_Entries from './assets/Components/Flavor_Text_Entries';
import Flavor_Language from './assets/Components/Flavor_Language';
import Names from './assets/Components/Names';
import Game_Indices from './assets/Components/Game_Indices';
import Game_Indices_Version from './assets/Components/Game_Indices_Version';
import Moves from './assets/Components/Moves';
import Stats from './assets/Components/Stats';
import Stats_Child from './assets/Components/Stats_Child';
import Characteristics from './assets/Components/Characteristics';
import Stats_Names from './assets/Components/Stats_Names';
import Char_Descriptions from './assets/Components/Char_Descriptions';
import Desc_Language from './assets/Components/Desc_Language';
import Types from './assets/Components/Types/Types';
import Types_Child from './assets/Components/Types/Types_Child';
import Damage_Relations from './assets/Components/Types/Damage_Relations';
import Game_Indices_Types from './assets/Components/Types/Game_Indices_Types';
import Moves_Types from './assets/Components/Types/Moves_Types';
import Pokemons_Types from './assets/Components/Types/Pokemons_Types';
import PokemonDetails from './PokemonDetails';
import { useEffect, useState } from 'react';

function App() {


  return (
    <div style={{ padding: '1px' }}>

    <Routes>

    <Route path="/" element={<PokemonCardList />} />

      <Route path="/poke_card/:name" element={<PokemonDetails />}>
        <Route path="abilities" element={<Abilities />}>
          <Route path="effect_changes/:id" element={<Effect_Changes />} />
          <Route path="flavor_text_entries/:id" element={<Flavor_Text_Entries />} />
          <Route path="language_names/:id" element={<LanguageNames />} />
        </Route>
        <Route path="game_indices" element={<Game_Indices />}>
          <Route path="effect_changes/:id" element={<Effect_Changes />} />
          <Route path="flavor_text_entries/:id" element={<Flavor_Text_Entries />} />
          <Route path="language_names/:id" element={<LanguageNames />} />
        </Route>
        <Route path="moves" element={<Moves />}>
          <Route path="effect_changes/:id" element={<Effect_Changes />} />
          <Route path="flavor_text_entries/:id" element={<Flavor_Text_Entries />} />
          <Route path="language_names/:id" element={<LanguageNames />} />
        </Route>
        <Route path="stats" element={<Stats />}>
          <Route path="effect_changes/:id" element={<Effect_Changes />} />
          <Route path="flavor_text_entries/:id" element={<Flavor_Text_Entries />} />
          <Route path="language_names/:id" element={<LanguageNames />} />
        </Route>
        <Route path="types" element={<Types />}>
          <Route path="effect_changes/:id" element={<Effect_Changes />} />
          <Route path="flavor_text_entries/:id" element={<Flavor_Text_Entries />} />
          <Route path="language_names/:id" element={<LanguageNames />} />
        </Route>
      </Route>
    </Routes>


    </div>
  );
}

export default App;
