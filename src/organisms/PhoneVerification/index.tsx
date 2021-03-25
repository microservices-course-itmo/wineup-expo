import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import PrimaryButton from '../../atoms/PrimaryButton'
import Text from '../../atoms/Text'
import GoBackArrowIcon from '../../molecules/Auth/GoBackArrowIcon'
import confirmButtonCross from '../../../assets/confirmButtonCross.png'
import Countdown from '../../molecules/Countdown'
import { useAuthContext } from '../../screens/Auth/AuthContext'
import LabeledInput from '../../molecules/LabeledInput'

interface PhoneVerificationProps {
  phone: string
  onConfirm: () => void
  onBack: () => void
}

function PhoneVerification({
  phone,
  onConfirm,
  onBack,
}: PhoneVerificationProps) {
  const auth = useAuthContext()
  const [verifyMethods, setVerifyMethods] = useState<{
    verify(code: string): Promise<void>
    resend(): Promise<void>
  }>()

  useEffect(() => {
    const effect = async () => {
      try {
        const methods = await auth.authenticate(phone)

        setVerifyMethods(methods)
      } catch (e) {
        if (e.message === 'Cancelled by user') {
          onBack()
        }
      }
    }

    effect()
  }, [])

  const [code, setCode] = useState('')
  const [isIncorrect, setIsIncorrect] = useState(false)
  const [resendAvailable, setResendAvailable] = useState(false)

  const onVerify = async () => {
    try {
      await verifyMethods.verify(code)

      onConfirm()
    } catch (_) {
      setIsIncorrect(true)
    }
  }

  const onResend = async () => {
    await verifyMethods?.resend()

    setIsIncorrect(false)
  }

  const onTimerEnd = () => {
    setResendAvailable(true)
  }

  return (
    <>
      <BackButton onPress={onBack}>
        <GoBackArrowIcon />
      </BackButton>
      {isIncorrect && (
        <WarningContainer>
          <Image source={confirmButtonCross} />
          <StyledWrongCodeText>Код введён неверно</StyledWrongCodeText>
        </WarningContainer>
      )}
      <Heading>Введите код подтверждения</Heading>
      <StyledLabeledInput
        value={code}
        onChangeText={setCode}
        maxLength={6}
        keyBoardType='numeric'
        inputStyle={{
          backgroundColor: 'transparent',
          width: 212,
        }}
      />
      <SaveButton onPress={onVerify} disabled={code.length !== 6}>
        <SaveButtonLabel>ПОДТВЕРДИТЬ</SaveButtonLabel>
      </SaveButton>
      {isIncorrect && !resendAvailable && (
        <StyledCountDown time={5} onEnd={onTimerEnd} style={{}} />
      )}
      {resendAvailable && (
        <ResendButton onPress={onResend} disabled={!resendAvailable}>
          <ResendLabel>ОТПРАВИТЬ ПОВТОРНО</ResendLabel>
        </ResendButton>
      )}
    </>
  )
}

export default PhoneVerification

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 16px;
  flex-direction: row;
  align-items: center;
`

const WarningContainer = styled.View`
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
`

const StyledWrongCodeText = styled.Text`
  color: rgb(226, 3, 56);
  font-size: 16px;
  font-family: 'PTSans_400Regular';
  margin-left: 9px;
`

const Heading = styled.Text`
  margin-top: 20px;
  padding: 0 30px;
  font-weight: 300;
  font-size: 23px;
  line-height: 32px;

  text-align: center;
`

const StyledLabeledInput = styled(LabeledInput)`
  height: 50px;
  width: 270px;
  margin: 20px auto 30px;
  border-radius: 4px;
  border: 1px solid rgba(143, 143, 143, 0.25);
  background: #f4f4f4;
`

const SaveButton = styled(PrimaryButton)`
  max-width: 270px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`

const SaveButtonLabel = styled(Text)`
  text-align: center;
  color: #ffffff;
`

const ResendButton = styled.TouchableOpacity`
  margin: 20px auto 0;
  border-bottom-width: 1px;
  border-bottom-color: #931332;
`

const StyledCountDown = styled(Countdown)`
  margin: 30px auto 0;
`

const ResendLabel = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #931332;
`
