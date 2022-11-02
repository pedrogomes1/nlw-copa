import { NativeBaseProvider, Center, Text, StatusBar } from "native-base";
export function SignIn() {
  return (
    <Center flex={1} bgColor="gray.900">
      <Text color="white" fontSize={24}>
        Hello world
      </Text>
      <StatusBar barStyle="dark-content" />
    </Center>
  );
}
