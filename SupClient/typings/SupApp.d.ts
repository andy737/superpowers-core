type ChooseFolderCallback = (err: string, folder: string) => void;
// type ChooseFileCallback = (err: string, filename: string) => void;

declare namespace SupApp {
  export function getCurrentWindow(): GitHubElectron.BrowserWindow;
  export function getIpc(): GitHubElectron.IpcRenderer;

  export function showMainWindow(): void;

  export function openWindow(url: string, options?: OpenWindowOptions): GitHubElectron.BrowserWindow;
  interface OpenWindowOptions {
    size?: { width: number; height: number; };
    minSize?: { width: number; height: number; };
    resizable?: boolean;
  }

  export function openLink(url: string): void;
  export function showItemInFolder(path: string): void;

  export function createMenu(): GitHubElectron.Menu;
  export function createMenuItem(options: GitHubElectron.MenuItemOptions): GitHubElectron.MenuItem;

  export namespace clipboard {
    export function copyFromDataURL(dataURL: string): void;
  }

  export function chooseFolder(callback: ChooseFolderCallback): void;
  // export function chooseFile(callback: ChooseFileCallback): void;

  export function mkdirp(folderPath: string, callback: (err: any) => void): void;
  export function writeFile(filename: string, data: any, options: any, callback: (err: NodeJS.ErrnoException) => void): void;
  export function spawnChildProcess(filename: string): void;

  // export function publishProject(options: PublishOptions): void;
}
