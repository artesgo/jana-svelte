import { aquarelles } from './_aquarelles';
import { murals } from './_murals';
import { squarely } from './_squarely';
import { windows } from './_window';

export interface GalleryItem {
	category: string;
	short: string;
	path?: string;
	title?: string;
	url?: string;
}

export const gallery: GalleryItem[] = [
	{
		category: 'furniture',
		path: '449436259_7798686076834196_5999431338271248670_n.jpg',
		short: '449436259'
	},
	{
		category: 'furniture',
		path: '449487023_7798686070167530_2685129615667842491_n.jpg',
		short: '449487023'
	},
	{
		category: 'furniture',
		path: '449653281_7798686060167531_8616791023003179067_n.jpg',
		short: '449653281'
	},
	{
		category: 'furniture',
		path: '449708041_7798686080167529_5956719425143570085_n.jpg',
		short: '449708041'
	},
	{
		category: 'furniture',
		path: '449726853_7798686056834198_866279041002162164_n.jpg',
		short: '449726853'
	},
	{ category: 'landscape', path: '2024-12-01-231255_004.jpeg', short: '231255_004' },
	{ category: 'landscape', path: '2024-12-01-231255_005.jpeg', short: '231255_005' },
	{ category: 'landscape', path: '2024-12-01-231255_008.jpeg', short: '231255_008' },
	{ category: 'landscape', path: '2024-12-01-231255_009.jpeg', short: '231255_009' },
	{ category: 'landscape', path: '2024-12-01-231255_011.jpeg', short: '231255_011' },
	{
		category: 'landscape',
		path: 'signal-2026-05-08-200740_004.jpeg',
		short: 'signal-2026-05-08-200740_004'
	},
	{
		category: 'landscape',
		path: 'signal-2026-05-08-200740_005.jpeg',
		short: 'signal-2026-05-08-200740_005'
	},
	{
		category: 'landscape',
		path: 'signal-2026-05-08-200740_007.jpeg',
		short: 'signal-2026-05-08-200740_007'
	},
	{
		category: 'landscape',
		path: 'signal-2026-05-08-200740_009.jpeg',
		short: 'signal-2026-05-08-200740_009'
	},
	{
		category: 'landscape',
		path: 'signal-2026-05-08-200740_010.jpeg',
		short: 'signal-2026-05-08-200740_010'
	},
	{
		category: 'landscape',
		path: 'signal-2026-05-08-200740_011.jpeg',
		short: 'signal-2026-05-08-200740_011'
	},
	{
		category: 'landscape',
		path: 'signal-2026-05-29-201922.jpeg',
		short: 'signal-2026-05-29-201922'
	},
	{
		category: 'paintings',
		path: 'Celebration.jpeg',
		short: 'Celebration',
		title: 'Celebration'
	},
	{
		category: 'paintings',
		path: 'Flower_of_life_pain_and_love.jpeg',
		short: 'Flower_of_life_pain_and_love',
		title: 'Flower of Life, Pain and Love'
	},
	{
		category: 'paintings',
		path: '96286438_2900072550028931_5636417330662604800_n.jpg',
		short: '96286438'
	},
	{
		category: 'paintings',
		path: '449213520_7798687493500721_6644947306010237284_n.jpg',
		short: '449213520'
	},
	{
		category: 'paintings',
		path: '449293391_7798686893500781_6203718978588757950_n.jpg',
		short: '449293391'
	},
	{
		category: 'paintings',
		path: '449298440_7798687163500754_6346580185911645883_n.jpg',
		short: '449298440'
	},
	{
		category: 'paintings',
		path: '449306090_7798687146834089_2002534446602621701_n.jpg',
		short: '449306090'
	},
	{
		category: 'paintings',
		path: '449309638_7798686900167447_725890389537879515_n.jpg',
		short: '449309638'
	},
	{
		category: 'paintings',
		path: '449314754_7798687170167420_3009910755418896581_n.jpg',
		short: '449314754'
	},
	{
		category: 'paintings',
		path: '449316376_7798687150167422_937091636521322582_n.jpg',
		short: '449316376'
	},
	{
		category: 'paintings',
		path: '449317248_7798686876834116_1024486012995281469_n.jpg',
		short: '449317248'
	},
	{
		category: 'paintings',
		path: '449364911_7798687483500722_1161417382239934688_n.jpg',
		short: '449364911'
	},
	{
		category: 'paintings',
		path: '449391372_7798687160167421_2707009781954765875_n.jpg',
		short: '449391372'
	},
	{
		category: 'paintings',
		path: '449395351_7798687140167423_8464555412836451846_n.jpg',
		short: '449395351'
	},
	{
		category: 'paintings',
		path: '449481443_7798687156834088_8222219281996346795_n.jpg',
		short: '449481443'
	},
	{
		category: 'paintings',
		path: '449489882_7819104748125662_3125579803976052032_n.jpg',
		short: '449489882'
	},
	{
		category: 'paintings',
		path: '449490604_7798687143500756_6161706534474470052_n.jpg',
		short: '449490604'
	},
	{
		category: 'paintings',
		path: '449504388_7798686073500863_8635066185637955110_n.jpg',
		short: '449504388'
	},
	{
		category: 'paintings',
		path: '449605211_7798687153500755_3136826568924916119_n.jpg',
		short: '449605211'
	},
	{
		category: 'paintings',
		path: '449656997_7798687166834087_8421809081146515320_n.jpg',
		short: '449656997'
	},
	{
		category: 'paintings',
		path: '449836774_7819104751458995_3673249619374369202_n.jpg',
		short: '449836774'
	},
	{
		category: 'paintings',
		path: '450106959_7819104758125661_1982334710427700964_n.jpg',
		short: '450106959'
	},
	{ category: 'paintings', path: '2024-12-01-231255_002.jpeg', short: '231255_002' },
	{
		category: 'paintings',
		path: '	signal-2026-05-08-200740.jpeg',
		short: '200740',
		title: 'Dutch Style hand painted tiles'
	},
	{
		category: 'sculptures',
		path: '449294915_7798686666834137_7799047040659639234_n.jpg',
		short: '449294915'
	},
	{
		category: 'sculptures',
		path: '449300396_7798686663500804_128920523397674300_n.jpg',
		short: '449300396'
	},
	{
		category: 'sculptures',
		path: '449301865_7798686653500805_7483731759409818363_n.jpg',
		short: '449301865'
	},
	{
		category: 'sculptures',
		path: '449309090_7798686380167499_7943636083101602551_n.jpg',
		short: '449309090'
	},
	{
		category: 'sculptures',
		path: '449437976_7798686656834138_6592071912856038755_n.jpg',
		short: '449437976'
	},
	{
		category: 'sculptures',
		path: '449439821_7798686673500803_93017445375315135_n.jpg',
		short: '449439821'
	},
	{
		category: 'sculptures',
		path: '449720607_7798686646834139_4524109893269680871_n.jpg',
		short: '449720607'
	},
	{
		category: 'sculptures',
		path: 'signal-2026-05-08-200740_002.jpeg',
		short: '200740_002',
		title: 'Iron work, Forging'
	},
	{
		category: 'sculptures',
		path: '	signal-2026-05-08-200740_003.jpeg',
		short: '200740_003',
		title: 'Live Sculpting, Victoria BC provincial museum'
	},
	...windows,
	...aquarelles,
	...squarely,
	...murals
];
