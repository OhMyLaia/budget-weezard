import React, { Dispatch, SetStateAction } from 'react';
import { UserBudgetType } from '../types/types';

type UserBudgetContextType = [UserBudgetType[], Dispatch<SetStateAction<UserBudgetType[]>>];

export const UserBudgetContext = React.createContext<UserBudgetContextType>([[], () => {}]);