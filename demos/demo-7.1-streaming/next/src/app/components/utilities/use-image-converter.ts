import { useCallback, useEffect, useRef } from 'react';

export type ImageSize = [height: number, width: number];

export default function useImageConverter(
    max: number,
    setSize: (size: ImageSize) => void,
    setImage: (image: string) => void
) {
    const inputRef = useRef<HTMLInputElement>(null);

    const processImage = useCallback((e: Event) => {
        const input = e.target as HTMLInputElement;
        let oldHeight: number;
        let oldWidth: number;
        let newHeight: number;
        let newWidth: number;
        const files = input?.files;
        if (files && files.length > 0) {
            const f = files[0];
            if (f.type !== 'image/jpeg') {
                throw new Error('Sorry, only jpg images are allowed');
            }
            const reader = new FileReader();
            reader.onload = (function () {
                return function (e2: ProgressEvent<FileReader>) {
                    const image = new window.Image();
                    image.onload = function () {
                        oldHeight = (this as HTMLImageElement).height;
                        oldWidth = (this as HTMLImageElement).width;
                        newHeight = oldHeight;
                        newWidth = oldWidth;
                        if (oldHeight > max || oldWidth > max) {
                            const aspectRatio = oldWidth / oldHeight;
                            if (oldHeight > oldWidth) {
                                newHeight = max;
                                newWidth = max * aspectRatio;
                            } else {
                                newWidth = max;
                                newHeight = max / aspectRatio;
                            }
                        }
                        const canvas = document.createElement('canvas');
                        canvas.width = newWidth;
                        canvas.height = newHeight;
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                            ctx.drawImage(image, 0, 0, newWidth, newHeight);
                            // call the two set functions here
                            setImage(canvas.toDataURL('image/jpeg'));
                            setSize([newHeight, newWidth]);
                        }
                    };
                    image.src = (e2.target as FileReader).result as string;
                };
            })();
            reader.readAsDataURL(f);
        }
    }, [max, setSize, setImage]);

    useEffect(() => {
        const node = inputRef.current;
        if (node) {
            node.addEventListener('change', processImage);
            return () => {
                node.removeEventListener('change', processImage);
            };
        }
    }, [processImage]);

    return inputRef;
}

