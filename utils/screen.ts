export function getScreenSize(): string {
    if (typeof window === 'undefined') return 'md';
    const width = window.innerWidth;
    if (width < 576) {
        return 'xs';
    }
    if (width < 768) {
        return 'sm';
    }
    if (width < 992) {
        return 'md';
    }
    if (width < 1200) {
        return 'lg';
    }
    return 'md';
}
export function getScreenSizeNumber(): number {
    if (typeof window === 'undefined') return 2;
    const width = window.innerWidth;
    if (width < 576) {
        return 0;
    }
    if (width < 768) {
        return 1;
    }
    if (width < 992) {
        return 2;
    }
    if (width < 1200) {
        return 3;
    }
    return 2;
}
