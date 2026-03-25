export interface Tile {
  title: string;
  text: string;
}

export interface TasksData {
  description: string;
  tiles: Tile[];
}
