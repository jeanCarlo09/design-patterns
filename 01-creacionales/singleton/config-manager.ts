class ConfigManager {
  private config: Record<string, string> = {};

  setConfig(key: string, value: string): void {
    this.config[key] = value;
  }

  getConfig(key: string): string | null {
    return this.config[key];
  }

  getAllConfig(): Record<string, string> {
    return { ...this.config };
  }
}

// Las exporaciones se comportan como un Singleton
export const configManager = new ConfigManager();
