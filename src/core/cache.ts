
export class Cache {
  private masterKey;

  constructor(key: string) {
    this.masterKey = key || 'cache_key';
  }

  public setCache(key: string, data: any) {
    localStorage.setItem(
      this.getKey(key),
      JSON.stringify({
        data,
      })
    );
  }

  public getCache(key: string): { timeout: number; data: any } | null {
    const cached = localStorage.getItem(this.getKey(key));
    try {
      const value = cached ? JSON.parse(cached) : null;
      return value;
    } catch (e) {
      return null;
    }
  }

  public remove(key: string) {
    return localStorage.removeItem(this.getKey(key));
  }



  private getKey(key: string) {
    return `${this.masterKey}_${key}`;
  }
}

export default new Cache(import.meta.env.VITE_LOCAL_CACHE_KEY || 'HEALTH_APP');
