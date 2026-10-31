import { Users, BookOpen, User, MonitorPlay } from 'lucide-react'

export const CAPACITY_OPTIONS = [
  { value: 'all', label: 'Todas (1-10)', min: 1, max: 10 },
  { value: 'individual', label: 'Individual (1)', min: 1, max: 1 },
  { value: 'small', label: 'Pequeñas (2-4)', min: 2, max: 4 },
  { value: 'large', label: 'Grupales (5-10)', min: 5, max: 10 }
]

export const TIME_SLOTS = [
  '08:30 - 10:00',
  '10:00 - 11:30',
  '11:30 - 13:00',
  '14:00 - 15:30',
  '15:30 - 17:00',
  '17:00 - 18:30'
]

export const MAX_DAILY_ROOM_RESERVATIONS = 2

export const ROOMS = [
  {
    id: 'A-101',
    name: 'Sala de Colaboración A-101',
    location: 'Piso 1, Ala Norte',
    capacity: 6,
    wifi: true,
    av: true,
    available: true,
    Icon: Users,
    description: 'Espacio ideal para grupos medianos que requieren herramientas audiovisuales para presentaciones.'
  },
  {
    id: 'B-205',
    name: 'Sala de Estudio B-205',
    location: 'Piso 2, Ala Sur',
    capacity: 4,
    wifi: true,
    av: false,
    available: true,
    Icon: BookOpen,
    description: 'Ambiente silencioso optimizado para el trabajo concentrado en grupos pequeños.'
  },
  {
    id: 'C-03',
    name: 'Cubículo Individual C-03',
    location: 'Piso 3, Silencio Total',
    capacity: 1,
    wifi: true,
    av: false,
    available: false,
    Icon: User,
    description: 'Espacio privado para estudio intensivo individual sin interrupciones.'
  },
  {
    id: 'M-01',
    name: 'Sala Multimedia M-01',
    location: 'Subsuelo, Laboratorios',
    capacity: 8,
    wifi: true,
    av: false,
    available: true,
    Icon: MonitorPlay,
    description: 'Equipada para edición de video y visualización de recursos multimedia académicos.'
  },
  {
    id: 'A-102',
    name: 'Sala de Colaboración A-102',
    location: 'Piso 1, Ala Norte',
    capacity: 10,
    wifi: true,
    av: true,
    available: true,
    Icon: Users,
    description: 'Sala amplia para reuniones de proyecto y trabajos grupales numerosos.'
  },
  {
    id: 'C-04',
    name: 'Cubículo Individual C-04',
    location: 'Piso 3, Silencio Total',
    capacity: 1,
    wifi: true,
    av: false,
    available: true,
    Icon: User,
    description: 'Espacio privado para estudio intensivo individual sin interrupciones.'
  }
]

export default ROOMS
