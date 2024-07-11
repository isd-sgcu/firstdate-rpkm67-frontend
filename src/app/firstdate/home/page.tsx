'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import FirstDateLogo from '@public/stamp/logo.svg';
import Slide from '@public/stamp/slide.svg';
import OrganizationStamp from '@public/stamp/organization-stamp.svg';
import ExchangeOptionStamp from '@public/stamp/exchange-option.svg';
import BraceletStamp from '@public/stamp/bracelet.svg';
import DiffuserStamp from '@public/stamp/diffuser.svg';
import DrawingStamp from '@public/stamp/drawing.svg';
import Landmark1Stamp from '@public/stamp/landmark-1.svg';
import Landmark2Stamp from '@public/stamp/landmark-2.svg';
import Landmark3Stamp from '@public/stamp/landmark-3.svg';
import Landmark4Stamp from '@public/stamp/landmark-4.svg';
import ClubOutsideStamp from '@public/stamp/outside-sgcu.svg';
import ClubInsideStamp from '@public/stamp/inside-sgcu.svg';
import { getStamp, createStamp } from '@/utils/stamp';
import { IActivity } from '@/types/stamp';
import { Stamp } from '@/types/stamp';
import { getUserId } from '@/utils/auth';
import { useAuth } from '@/context/AuthContext';
import Spinner from '@/components/firstdate/Spinner';
import Border from '@/components/firstdate/Border';
import StampHeading from '@/components/firstdate/home/StampHeading';
import StampContainer from '@/components/firstdate/home/StampContainer';
import StampSubHeading from '@/components/firstdate/home/StampSubHeading';
import StampCheckBox from '@/components/firstdate/home/StampCheckBox';
import EndJourneyButton from '@/components/firstdate/home/EndJourneyButton';
import OTPModal from '@/components/firstdate/home/modal/OTPModal';
import FavoriteClubModal from '@/components/firstdate/home/modal/FavoriteClubModal';
import OpinionModal from '@/components/firstdate/home/modal/OpinionModal';
import MenuList from '@/components/MenuList';

const StampPage = () => {
  const [stamps, setStamps] = useState<Stamp>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOTPModalOpen, setOTPModalOpen] = useState(false);
  const [isFavoriteClubModalOpen, setFavoriteClubModalOpen] = useState(false);
  const [isOpinionModalOpen, setOpinionModalOpen] = useState(false);
  const [currentActivityId, setCurrentActivityId] = useState<string | null>(
    null
  );

  const { resetContext } = useAuth();

  useEffect(() => {
    const fetchStamps = async () => {
      setIsLoading(true);
      try {
        const userId = await getUserId();
        if (!userId) {
          throw new Error('No user id');
        }

        const fetchedStamps = await getStamp(userId);
        if (fetchedStamps instanceof Error) {
          throw fetchedStamps;
        }
        setStamps(fetchedStamps);
      } catch (error: unknown) {
        console.log('error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStamps();
  }, []);

  const handleStampClick = (activityId: IActivity) => {
    setCurrentActivityId(activityId);

    if (
      activityId === IActivity.CLUB_OUTSIDE ||
      activityId === IActivity.CLUB_INSIDE
    ) {
      // Open the appropriate text input modal
      if (activityId === IActivity.CLUB_OUTSIDE) {
        setFavoriteClubModalOpen(true);
      } else {
        setOpinionModalOpen(true);
      }
    } else {
      // Open OTP modal for other activities
      setOTPModalOpen(true);
    }
  };

  const handleCreateStamp = async (activityId: string, userInput: string) => {
    setIsLoading(true);
    try {
      const userId = await getUserId();
      if (!userId) {
        throw new Error('No user id');
      }
      const newStamp = await createStamp(activityId, userId, userInput);
      if (newStamp instanceof Error) {
        toast.error('OTP ไม่ถูกต้อง!');
        throw newStamp;
      }
      setStamps(newStamp);
      toast.success('ได้รับ Stamp แล้ว!');
      resetContext();
    } catch (error) {
      console.log('error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalClose = () => {
    setOTPModalOpen(false);
    setFavoriteClubModalOpen(false);
    setOpinionModalOpen(false);
    setCurrentActivityId(null);
  };

  return (
    <main className="w-full flex justify-center items-center flex-col">
      {isLoading && <Spinner />}
      <Toaster />
      <Border
        variant="light-pink"
        className="space-y-5 pt-5"
      >
        <div className="flex items-center flex-col space-y-1.5">
          <Image
            src={FirstDateLogo}
            alt="First Date Logo"
            width={150}
          />
          <StampHeading>Your Journey</StampHeading>
          <Image
            src={Slide}
            alt="Slide"
          />
          <StampSubHeading>Workshop</StampSubHeading>
          <StampContainer>
            <StampCheckBox
              text="Workshop x Wonder"
              stampImage={OrganizationStamp}
              collected={stamps?.stamp[0] === '1'}
              onClick={() =>
                stamps?.stamp[0] === '0' &&
                handleStampClick(IActivity.WORKSHOP_X_WONDER)
              }
            />
            <StampCheckBox
              text="Giving and Taking"
              stampImage={ExchangeOptionStamp}
              collected={stamps?.stamp[1] === '1'}
              onClick={() =>
                stamps?.stamp[1] === '0' &&
                handleStampClick(IActivity.GIVING_AND_TAKING)
              }
            />
            <StampCheckBox
              text="The jewel"
              stampImage={BraceletStamp}
              collected={stamps?.stamp[2] === '1'}
              onClick={() =>
                stamps?.stamp[2] === '0' &&
                handleStampClick(IActivity.THE_JEWEL)
              }
            />
          </StampContainer>
          <StampContainer>
            <StampCheckBox
              text="Your pleasing scent"
              stampImage={DiffuserStamp}
              collected={stamps?.stamp[3] === '1'}
              onClick={() =>
                stamps?.stamp[3] === '0' &&
                handleStampClick(IActivity.YOUR_PLEASING_SCENT)
              }
            />
            <StampCheckBox
              text="Object d'art"
              stampImage={DrawingStamp}
              collected={stamps?.stamp[4] === '1'}
              onClick={() =>
                stamps?.stamp[4] === '0' &&
                handleStampClick(IActivity.OBJET_D_ART)
              }
            />
          </StampContainer>
          <StampSubHeading>Landmark</StampSubHeading>
          <StampContainer>
            <StampCheckBox
              text="Landmark 1"
              stampImage={Landmark1Stamp}
              collected={stamps?.stamp[5] === '1'}
              onClick={() =>
                stamps?.stamp[5] === '0' &&
                handleStampClick(IActivity.LANDMARK_1)
              }
            />
            <StampCheckBox
              text="Landmark 2"
              stampImage={Landmark2Stamp}
              collected={stamps?.stamp[6] === '1'}
              onClick={() =>
                stamps?.stamp[6] === '0' &&
                handleStampClick(IActivity.LANDMARK_2)
              }
            />
            <StampCheckBox
              text="Landmark 3"
              stampImage={Landmark3Stamp}
              collected={stamps?.stamp[7] === '1'}
              onClick={() =>
                stamps?.stamp[7] === '0' &&
                handleStampClick(IActivity.LANDMARK_3)
              }
            />
            <StampCheckBox
              text="Landmark 4"
              stampImage={Landmark4Stamp}
              collected={stamps?.stamp[8] === '1'}
              onClick={() =>
                stamps?.stamp[8] === '0' &&
                handleStampClick(IActivity.LANDMARK_4)
              }
            />
          </StampContainer>
          <StampSubHeading>Club</StampSubHeading>
          <StampContainer>
            <StampCheckBox
              text="ภายนอกอบจ."
              stampImage={ClubOutsideStamp}
              collected={stamps?.stamp[9] === '1'}
              onClick={() =>
                stamps?.stamp[9] === '0' &&
                handleStampClick(IActivity.CLUB_OUTSIDE)
              }
            />
            <StampCheckBox
              text="ภายใต้อบจ."
              stampImage={ClubInsideStamp}
              collected={stamps?.stamp[10] === '1'}
              onClick={() =>
                stamps?.stamp[10] === '0' &&
                handleStampClick(IActivity.CLUB_INSIDE)
              }
            />
          </StampContainer>
        </div>
        <EndJourneyButton />
      </Border>
      <MenuList />
      {isOTPModalOpen && currentActivityId && (
        <OTPModal
          activityId={currentActivityId}
          onClose={handleModalClose}
          onSubmit={handleCreateStamp}
        />
      )}
      {isFavoriteClubModalOpen && currentActivityId && (
        <FavoriteClubModal
          activityId={currentActivityId}
          onClose={handleModalClose}
          onSubmit={handleCreateStamp}
        />
      )}
      {isOpinionModalOpen && currentActivityId && (
        <OpinionModal
          activityId={currentActivityId}
          onClose={handleModalClose}
          onSubmit={handleCreateStamp}
        />
      )}
    </main>
  );
};

export default StampPage;
