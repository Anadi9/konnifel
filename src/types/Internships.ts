export interface UpdateItemProps {
  icon: string;
  text: string;
}

export interface InternshipUpdatesProps {
  title: string;
  updates: UpdateItemProps[];
}

export interface MembershipInfoProps {
  title: string;
  subtitle: string;
  description: string;
}

export interface KonnifelMembershipProps {
  membershipInfo: MembershipInfoProps;
  internshipUpdates: InternshipUpdatesProps;
}

export interface CustomInputFieldProps {
  label: string;
  placeholder: string;
  counter?: string;
  iconSrc: string;
}

export interface FilterOptionProps {
  text: string;
}

export interface InternshipCardProps {
  title: string;
  field: string;
  researchArea: string;
  institute: string;
  internUnder: string;
  lastDateToApply: string;
  isActive: boolean;
  isHighlighted?: boolean;
}
