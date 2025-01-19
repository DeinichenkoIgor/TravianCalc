// components/Icon.tsx

// Социалки
import LogoIcon from './LogoIcon';
import DiscordsIcon from './Social/DiscordsIcon';
// Menu
import VillagIcon from './NodsMenu/VillagIcon';
import ArmyIcon from './NodsMenu/ArmyIcon';
import MovingIcon from './NodsMenu/MovingIcon';
import StrogeIcon from './NodsMenu/StorageIcon';
import Villag4446Icon from './NodsMenu/VillagesMenu/Villag4446Icon';
import Villag3456Icon from './NodsMenu/VillagesMenu/Villag3456Icon';
import Villag3546Icon from './NodsMenu/VillagesMenu/Villag3546Icon';
import Villag4356Icon from './NodsMenu/VillagesMenu/Villag4356Icon';
import Villag5346Icon from './NodsMenu/VillagesMenu/Villag5346Icon';
import Villag4536Icon from './NodsMenu/VillagesMenu/Villag4536Icon';
import Villag5436Icon from './NodsMenu/VillagesMenu/Villag5436Icon';
import Villag4437Icon from './NodsMenu/VillagesMenu/Villag4437Icon';
import Villag4347Icon from './NodsMenu/VillagesMenu/Villag4347Icon';
import Villag3447Icon from './NodsMenu/VillagesMenu/Villag3447Icon';
import Villag9Icon from './NodsMenu/VillagesMenu/Villag9Icon';
import Villag15Icon from './NodsMenu/VillagesMenu/Villag15Icon';
import MarketplaceIcon from './NodsMenu/MovingsMenu/MarketplaceIcon';
import MergeIcon from './NodsMenu/MovingsMenu/MergeIcon';
import DivideIcon from './NodsMenu/MovingsMenu/DivideIcon';
import SaveIcon from './NodsMenu/StoragesMenu/SaveIcon';
import AccumulateIcon from './NodsMenu/StoragesMenu/AccumulateIcon';
import BarracksIcon from './NodsMenu/ArmyMenu/BarracksIcon';
// Oasis
import OasisLIcon from './Oasis/OasisLIcon';
import OasisLLIcon from './Oasis/OasisLLIcon';
import OasisLCIcon from './Oasis/OasisLCIcon';
import OasisClIcon from './Oasis/OasisClIcon';
import OasisClClIcon from './Oasis/OasisClClIcon';
import OasisClCIcon from './Oasis/OasisClCIcon';
import OasisIIcon from './Oasis/OasisIIcon';
import OasisIIIcon from './Oasis/OasisIIIcon';
import OasisICIcon from './Oasis/OasisICIcon';
import OasisCIcon from './Oasis/OasisCIcon';
import OasisCCIcon from './Oasis/OasisCCIcon';
import OasisNonIcon from './Oasis/OasisNonIcon';

// Объединяем все иконки в один объект для легкого доступа
const Icon = {
    Social: {
        Logo: LogoIcon,
        Discord: DiscordsIcon
    },
    NodsMenu: {
        Villag: VillagIcon,
        Army: ArmyIcon,
        Moving: MovingIcon,
        Stroge: StrogeIcon
    },
    VillagesMenu: {
        Villag4446: Villag4446Icon,
        Villag3456: Villag3456Icon,
        Villag3546: Villag3546Icon,
        Villag4356: Villag4356Icon,
        Villag5346: Villag5346Icon,
        Villag4536: Villag4536Icon,
        Villag5436: Villag5436Icon,
        Villag4437: Villag4437Icon,
        Villag4347: Villag4347Icon,
        Villag3447: Villag3447Icon,
        Villag9: Villag9Icon,
        Villag15: Villag15Icon
    },
    ArmyMenu: {
        Barracks: BarracksIcon,
    },
    MovingMenu: {
        Marketplace: MarketplaceIcon,
        Merge: MergeIcon,
        Divide: DivideIcon
    },
    StrogesMenu: {
        Save: SaveIcon,
        Accumulate: AccumulateIcon
    },
    OasisIcons: {
        OasisL: OasisLIcon,
        OasisLL: OasisLLIcon,
        OasisLC: OasisLCIcon,
        OasisCl: OasisClIcon,
        OasisClCl: OasisClClIcon,
        OasisClC: OasisClCIcon,
        OasisI: OasisIIcon,
        OasisII: OasisIIIcon,
        OasisIC: OasisICIcon,
        OasisC: OasisCIcon,
        OasisCC: OasisCCIcon,
        OasisNon: OasisNonIcon
    }
};

export default Icon;