import {
  ShoppingCart, Package, FileText, DollarSign, Truck, Users,
  BarChart3, BookOpen, Shield, Globe, Building2, Zap,
  HeadphonesIcon, RefreshCw, Phone, Settings, TrendingUp,
  ClipboardList, Wrench, History, BarChart2, CheckCircle2,
  Star, Clock, MapPin, Mail, Calendar, AlertCircle, Info,
  ArrowRight, ChevronRight, Search, Download, Upload, Lock,
  Gauge,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  // originais
  ShoppingCart, Package, FileText, DollarSign, Truck, Users,
  BarChart3, BookOpen, Shield, Globe, Building2, Zap,
  HeadphonesIcon, RefreshCw, Phone, Settings, TrendingUp,
  // seções extras
  ClipboardList, Wrench, History, BarChart2, CheckCircle2,
  Star, Clock, MapPin, Mail, Calendar, AlertCircle, Info,
  ArrowRight, ChevronRight, Search, Download, Upload, Lock,
  Gauge,
};

export const ICON_NAMES = Object.keys(ICON_MAP);

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Package;
}
