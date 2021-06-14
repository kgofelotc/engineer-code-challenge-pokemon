export class PokemonDtl {
   public height: number;
   public id: number;
   public is_default: boolean;
   public location_area_encounters: string;
   public name: string;
   public order: number;
   public sprites: Sprites;
   public stats: Stat[];
   public weight: number;
   
}

export class Sprites {
public back_default: string;
public back_female?: any;
public back_shiny: string;
public back_shiny_female?: any;
public front_default: string;
public front_female?: any;
public front_shiny: string;
public front_shiny_female?: any;
public other: Other;

}

export class OfficialArtwork {
    public front_default: string;
}



export class DreamWorld {
    public  front_default: string;
    public front_female?: any;
}


export class Stat2 {
    public name: string;
    public url: string;
}

export class Stat { 
    public base_stat: number;
    public effort: number;
    public stat: Stat2;
}

export class Other {
    public dream_world: DreamWorld;
    public 'official-artwork': OfficialArtwork;
}