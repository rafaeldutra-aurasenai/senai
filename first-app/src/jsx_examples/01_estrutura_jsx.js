import { Text, View } from "react-native";

export function EstruturaJSX() {
  return (
    //retorno unico
    //<>
    <View>
      <Text>exemplo de retorno unico</Text>

      {/*retorno unico com fragment <></>*/}
      <View>
        <>
          <text></text>
          {/* exemplo selfclose*/}
          <view/>
        </>
      </View>
    </View>
    //</>
  );
}
