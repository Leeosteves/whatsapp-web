import React from 'react';
import { Avatar, AvatarProps } from '@heroui/react';
// Herda todas as props de Avatar e permite extensão
interface AvatarTXProps extends AvatarProps {
  badge?: React.ReactNode;
}
export default function AvatarTX({...props}:AvatarTXProps) {
  return (
    <Avatar {...props} />
  )
}
