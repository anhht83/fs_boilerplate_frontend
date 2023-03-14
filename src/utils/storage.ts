import { deleteCookie, getCookie, setCookie } from "cookies-next";

export abstract class StorageAbstract<T extends string> {
  public getItem(key: T, options?: any): any {
    const value = getCookie(key, options);
    if (typeof value === "string") return JSON.parse(value);
    return value;
  }

  public setItem(key: T, value: any, option?: any): void {
    setCookie(key, JSON.stringify(value), option);
  }

  public removeItem(key: T, options?: any): void {
    deleteCookie(key, options);
  }
}

class Storage extends StorageAbstract<any> {
}

const storage = new Storage();
export default storage;