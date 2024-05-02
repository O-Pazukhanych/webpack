type Mode = 'production' | 'development';

export default interface EnvConfiguration {
    mode?: Mode;
    port?: number;
}