import { TextAnimator } from '../TextAnimator/TextAnimator';

const roblineRecord: Record<string, string> = {
    r: 'slide-right',
    o: 'pop-bottom-left',
    b: 'rotate-left',
    l: 'slide-up',
    i: 'rotate-right',
    n: 'pop-bottom-right',
    e: 'slide-left',
};

export default function RoblineAnimation() {
    const [startAnimation, setStartAnimation] = useState(false);

    // useEffect(() => {
    //     setStartAnimation(true);
    // }, []);

    // return (
    //     {Object.keys(roblineRecord).map((letter) => (
    //         <TextAnimator
    //           animation={roblineRecord[letter]}
    //             shouldAnimate={startAnimation}
    // )
}
